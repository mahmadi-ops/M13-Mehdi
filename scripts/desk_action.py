#!/usr/bin/env python3
"""Posting Desk mechanical action: post or unpost topics of this book.

Usage: desk_action.py post-notes|unpost-notes <topic-key> [<topic-key> ...]

A topic is a lecture section (keyed by its xml:id, which is also its page
name on the site) or an assignment or review set (keyed by its file name
without .ptx).  Posting unwraps the topic's <xi:include>; unposting wraps
it in the UNPOSTED comment described in CLAUDE.md.  Several keys make one
change, checked as a whole: that is how a clean slate is done, and how a set
of topics that cite each other comes down together.

Chapters 2-4 and the problems chapter are wrapper files holding includes
(the problems chapter also has an introduction), and PreTeXt rejects a
chapter with no sections and a book with no chapters.  So a chapter whose
every include is wrapped leaves main.ptx too, returns when one of its
sections is posted, and the placeholder chapter ch-coming-soon.ptx stands
in while no real chapter is left (see sync_containers).

Unposting also wraps any dependent include whose cross-references would
otherwise dangle (marked UNPOSTED-WITH so the matching post restores it).
If a dangling reference cannot be fixed that way, every touched file is
restored and the script exits nonzero, so nothing half-done gets committed.

Exit 0: repo now in the requested state (possibly with no change).
Exit 1: bad invocation.  Exit 2: cannot be done mechanically.
"""
import os
import re
import sys

SRC = "source"
MAIN = "source/main.ptx"

# Chapter wrapper -> its include href in main.ptx.
CONTAINERS = {
    "source/ch-series-sequences.ptx": "ch-series-sequences.ptx",
    "source/ch-geometry.ptx": "ch-geometry.ptx",
    "source/ch-functions-multiple-variables.ptx": "ch-functions-multiple-variables.ptx",
    "source/exercises.ptx": "exercises.ptx",
}

# A book needs a chapter, so this placeholder stands in while every real
# chapter is unposted, and is dropped again as soon as one is posted.
PLACEHOLDER = "ch-coming-soon.ptx"
FIXTURES = {PLACEHOLDER, "frontmatter.ptx"}

# topic key -> (file holding its include, include href)
TOPICS = {
    # Chapter 1 is a single file included straight from main.ptx
    "chapter-hyperbolic-functions": ("source/main.ptx", "ch-7-3.ptx"),
    # Chapter 2: Series and Sequences
    "chapter-infinite-series": ("source/ch-series-sequences.ptx", "ch-10-2.ptx"),
    "chapter-taylor-maclaurin": ("source/ch-series-sequences.ptx", "ch-10-8.ptx"),
    "section-taylor": ("source/ch-series-sequences.ptx", "Taylor.ptx"),
    "chapter-binomial-series": ("source/ch-series-sequences.ptx", "ch-10-10.ptx"),
    # Chapter 3: 3D Space and Vector Algebra
    "chapter-three-dimensional-coordinates": ("source/ch-geometry.ptx", "ch-12-1.ptx"),
    "chapter-vectors": ("source/ch-geometry.ptx", "ch-12-2.ptx"),
    "section-dot-product": ("source/ch-geometry.ptx", "Dotproduct.ptx"),
    "section-cross-product": ("source/ch-geometry.ptx", "the-cross-product.ptx"),
    "section-parametrization": ("source/ch-geometry.ptx", "Parametrization.ptx"),
    "chapter-lines-planes": ("source/ch-geometry.ptx", "ch-12-5.ptx"),
    "section-conics": ("source/ch-geometry.ptx", "Conics.ptx"),
    "section-quadric-surfaces": ("source/ch-geometry.ptx", "QuadricSurface.ptx"),
    # Chapter 4: Functions of Multiple Variables
    "chapter-functions-several-variables": ("source/ch-functions-multiple-variables.ptx", "ch-14-1.ptx"),
    "chapter-limits-continuity": ("source/ch-functions-multiple-variables.ptx", "ch-14-2.ptx"),
    "chapter-partial-derivatives": ("source/ch-functions-multiple-variables.ptx", "ch-14-3.ptx"),
    "chapter-chain-rule": ("source/ch-functions-multiple-variables.ptx", "ch-14-4.ptx"),
    "section-directional-derivatives": ("source/ch-functions-multiple-variables.ptx", "directional-derivatives.ptx"),
    "section-tangent-planes-differentials": ("source/ch-functions-multiple-variables.ptx", "TangentPlanesDifferentials.ptx"),
    "section-extreme-values": ("source/ch-functions-multiple-variables.ptx", "extreme-values-saddle-points.ptx"),
    "section-lagrange-multipliers": ("source/ch-functions-multiple-variables.ptx", "LagrangeMultipliers.ptx"),
    # Assignments and Review Problems, all included from exercises.ptx
    # (pages worksheet-assignment-N.html and worksheet-review-problems-N.html)
    "assignment-1-hyperbolic": ("source/exercises.ptx", "assignment-1-hyperbolic.ptx"),
    "assignment-2-series-taylor": ("source/exercises.ptx", "assignment-2-series-taylor.ptx"),
    "assignment-3-taylor-convergence-binomial": ("source/exercises.ptx", "assignment-3-taylor-convergence-binomial.ptx"),
    "assignment-4-space-vectors-dot-product": ("source/exercises.ptx", "assignment-4-space-vectors-dot-product.ptx"),
    "assignment-5-cross-product-lines-planes": ("source/exercises.ptx", "assignment-5-cross-product-lines-planes.ptx"),
    "assignment-6-quadric-surfaces": ("source/exercises.ptx", "assignment-6-quadric-surfaces.ptx"),
    "assignment-7-functions-several-variables": ("source/exercises.ptx", "assignment-7-functions-several-variables.ptx"),
    "assignment-8-chain-rule": ("source/exercises.ptx", "assignment-8-chain-rule.ptx"),
    "assignment-9-tangent-planes": ("source/exercises.ptx", "assignment-9-tangent-planes.ptx"),
    "assignment-10-extreme-values-lagrange": ("source/exercises.ptx", "assignment-10-extreme-values-lagrange.ptx"),
    "review-problems-1": ("source/exercises.ptx", "review-problems-1.ptx"),
    "review-problems-2": ("source/exercises.ptx", "review-problems-2.ptx"),
    "review-problems-3": ("source/exercises.ptx", "review-problems-3.ptx"),
    "review-problems-4": ("source/exercises.ptx", "review-problems-4.ptx"),
}


def read(p):
    with open(p, encoding="utf-8") as f:
        return f.read()


def write(p, s):
    with open(p, "w", encoding="utf-8") as f:
        f.write(s)


def inc_re(href):
    return re.compile(r'<xi:include\s+href="\.?/?%s"\s*/>' % re.escape(href))


def wrapped_re(href):
    return re.compile(
        r'<!--\s*UNPOSTED(?:-WITH topic="([^"]*)")?\s+'
        r'(<xi:include\s+href="\.?/?%s"\s*/>)\s+UNPOSTED\s*-->' % re.escape(href)
    )


def strip_comments(text):
    return re.sub(r"<!--.*?-->", "", text, flags=re.S)


def unpost_include(path, href, topic=None):
    """Wrap one include.  Returns 'done', 'already', or 'absent'."""
    text = read(path)
    if wrapped_re(href).search(text):
        return "already"
    m = inc_re(href).search(text)
    if m is None:
        return "absent"
    tag = "UNPOSTED" if topic is None else 'UNPOSTED-WITH topic="%s"' % topic
    write(path, text[: m.start()] + "<!-- %s %s UNPOSTED -->" % (tag, m.group(0)) + text[m.end():])
    return "done"


def post_include(path, href):
    """Unwrap one include.  Returns 'done', 'already', or 'absent'."""
    text = read(path)
    m = wrapped_re(href).search(text)
    if m is None:
        return "already" if inc_re(href).search(text) else "absent"
    write(path, text[: m.start()] + m.group(2) + text[m.end():])
    return "done"


def live_includes(path):
    """The unwrapped <xi:include> hrefs of a file.  Wrapped ones are inside
    XML comments, so stripping comments leaves exactly what is in the book."""
    return re.findall(r'<xi:include\s+href="\.?/?([^"]+)"\s*/>', strip_comments(read(path)))


def sync_containers():
    """Keep the book structurally valid after a toggle: a chapter with no live
    sections leaves main.ptx, one with sections is in it, and the placeholder
    chapter appears only when nothing else is left."""
    for path, href in CONTAINERS.items():
        if not os.path.exists(path):
            continue
        if live_includes(path):
            post_include(MAIN, href)
        else:
            unpost_include(MAIN, href)
    real = [h for h in live_includes(MAIN) if h not in FIXTURES]
    if real:
        unpost_include(MAIN, PLACEHOLDER)
    elif post_include(MAIN, PLACEHOLDER) == "absent":
        sys.exit("%s has no placeholder include for %s; add one (wrapped) before </book>" % (MAIN, PLACEHOLDER))


def expand(path, depth=0):
    """Inline xi:includes recursively, dropping XML comments (so wrapped
    includes vanish), for cross-reference checking."""
    if depth > 20 or not os.path.exists(path):
        return ""
    text = strip_comments(read(path))
    return re.sub(r'<xi:include\s+href="\.?/?([^"]+)"\s*/>',
                  lambda m: expand(os.path.join(SRC, m.group(1)), depth + 1), text)


def dangling_refs():
    full = expand(MAIN)
    ids = set(re.findall(r'xml:id="([^"]+)"', full))
    refs = set()
    for group in re.findall(r'<xref\b[^>]*\bref="([^"]+)"', full):
        for r in re.split(r"[,\s]+", group):
            if r:
                refs.add(r)
    return {r for r in refs if r not in ids}


def files_referencing(ref_id):
    hits = []
    for name in os.listdir(SRC):
        if name.endswith(".ptx") and re.search(
                r'<xref\b[^>]*\bref="[^"]*\b%s\b[^"]*"' % re.escape(ref_id), read(os.path.join(SRC, name))):
            hits.append(name)
    return hits


def fix_dependents(keys, originals, baseline, bail):
    """After wrapping the batch, wrap any other include whose references now
    dangle, tagging it with the batch topic that defines the target so
    reposting that topic brings it back.  Chapter wrappers and other topics
    are never taken down as a side effect: that is an editorial call, so it
    bails to the Claude path."""
    top_level = set(re.findall(r'href="\.?/?([^"]+)"', read(MAIN)))
    topic_files = {h for _, h in TOPICS.values()}

    def owner(ref):
        for k in keys:
            if re.search(r'xml:id="%s"' % re.escape(ref), read(os.path.join(SRC, TOPICS[k][1]))):
                return k
        return keys[0]

    for _ in range(10):
        new_dangling = dangling_refs() - baseline
        if not new_dangling:
            return
        fixed_any = False
        for ref in sorted(new_dangling):
            for fname in files_referencing(ref):
                if fname in top_level or fname in topic_files:
                    continue
                for holder in originals:
                    if inc_re(fname).search(read(holder)):
                        if unpost_include(holder, fname, topic=owner(ref)) == "done":
                            fixed_any = True
                        break
        sync_containers()
        if not fixed_any:
            bail("unpost %s leaves dangling cross-references (%s) that cannot be fixed by wrapping an include"
                 % (" ".join(keys), ", ".join(sorted(new_dangling))))
    bail("unpost %s: dependency fixing did not converge" % " ".join(keys))


def main():
    if len(sys.argv) < 3 or sys.argv[1] not in ("post-notes", "unpost-notes"):
        sys.exit(__doc__)
    action, keys = sys.argv[1], sys.argv[2:]
    for key in keys:
        if key not in TOPICS:
            sys.exit("unknown topic key: %s" % key)

    originals = {os.path.join(SRC, n): read(os.path.join(SRC, n))
                 for n in os.listdir(SRC) if n.endswith(".ptx")}

    def bail(msg):
        for p, s in originals.items():
            write(p, s)
        print(msg, file=sys.stderr)
        sys.exit(2)

    baseline = dangling_refs()
    states = {}
    if action == "post-notes":
        for key in keys:
            path, href = TOPICS[key]
            states[key] = post_include(path, href)
            # restore any dependents that were unposted together with this topic
            pat = re.compile(
                r'<!--\s*UNPOSTED-WITH topic="%s"\s+(<xi:include\s+href="[^"]+"\s*/>)\s+UNPOSTED\s*-->' % re.escape(key))
            for p in originals:
                text = read(p)
                new = pat.sub(lambda m: m.group(1), text)
                if new != text:
                    write(p, new)
    else:
        for key in keys:
            path, href = TOPICS[key]
            states[key] = unpost_include(path, href)
        # an emptied chapter leaves the book before the reference check, so
        # its own introduction cannot be counted as a dangling citer
        sync_containers()
        if "done" in states.values():
            fix_dependents(keys, originals, baseline, bail)
    for key, state in states.items():
        if state == "absent":
            bail("%s: include %s not found in %s" % (key, TOPICS[key][1], TOPICS[key][0]))
        print("%s %s: %s" % (action, key, state))

    sync_containers()

    leftover = dangling_refs() - baseline
    if leftover:
        bail("change would leave dangling cross-references: %s" % ", ".join(sorted(leftover)))

    from xml.etree import ElementTree as ET
    for p, s in originals.items():
        if read(p) != s:
            try:
                ET.fromstring(read(p))
            except ET.ParseError as e:
                bail("%s no longer parses: %s" % (p, e))
            print("modified: %s" % p)


if __name__ == "__main__":
    main()
