# Claude workflow — MATH 13 course notes (PreTeXt book)

This repo is the MATH 13 (Multivariable Calculus, SCU) course-notes book,
published to https://mahmadi-ops.github.io/M13-Mehdi/ by the GitHub Action on
every push to `main`. Page filenames on the site come from the `xml:id` of
each chunked division (e.g. `section-conics.html`).

Do **not** reorganize the book: no renaming files, no moving sections, no
changing `publication/`, `project.ptx`, or the chapter order in
`source/main.ptx` beyond what the workflows below require (adding or
uncommenting a single `<xi:include>`).

Its companion repo is `mahmadi-ops/MATH13-Syllabus-Fall2026` (the syllabus).
Every posting action here ends with a row added to the posted-materials
table there (`source/updates.ptx`); its `CLAUDE.md` has the row format. If
that repo is not available in the session, add it (`add_repo`) or, failing
that, give the instructor the exact `<row>` to paste.

## The Posting Desk (click-to-post panel)

The instructor has a private control-panel artifact, the **Posting Desk**:
https://claude.ai/code/artifact/806060e5-7cc7-41fe-bee1-014bc1fbc2aa

Buttons on it create requests; a scheduled Routine ("MATH 13 Posting Desk —
process clicks", hourly) has Claude read the panel and act. When asked to
"check the posting desk" (or when the Routine fires):

1. Read the artifact (Artifact tool, `action: "read"`). Its
   `<script id="state">` block holds JSON with `requests[]`; act on every
   request whose `status` is `"sent"`.
   - `kind: "notes"` (`key` = the section's xml:id) → the Posting-notes
     workflow below.
   - `kind: "assignment"` (`payload.n`, `payload.due`) → the
     Posting-an-assignment workflow.
   - `kind: "release"` (`payload.n`) → the Releasing-solutions workflow.
   - `kind: "custom"` (`payload.text`) → the instructor's free-text
     instruction, if it is routine posting work; otherwise mark it
     `needs-input` and say why.
2. **Standing authorization**: the instructor chose "publish live
   immediately" for panel clicks, so commit panel-initiated changes
   directly to `main` in both repos (still validate first). This applies
   only to work a panel click requested — everything else follows the
   session's normal branch rules.
3. Never invent content: a request that needs material not in the repo
   (e.g. an assignment with no problem set in `source/`) is not posted —
   set its `status` to `"needs-input"` and a one-line `result` saying what
   to provide (the page shows it to the instructor).
4. Afterwards update the panel **on top of its current version** (re-read
   it just before publishing; keep requests that arrived meanwhile):
   set each handled request's `status` to `"done"` (with a short `result`),
   set the item's `posted`/`released` date (`YYYY-MM-DD`), prepend a `log`
   entry, and republish to the same URL with the markup otherwise
   unchanged and `<div id="app">` left empty (the page renders itself
   from state).
5. If nothing is pending, do nothing — no commits, no messages.

The sync goes both ways: after any posting done **outside** the panel
(a `/post-notes`, `/post-assignment`, or `/release-solutions` run from
chat), also update the panel's state — posted/released date and a log
entry — and republish it, so the desk always shows the true posting
history.

## The three routine workflows

Invocable as slash commands (see `.claude/skills/`), or by the instructor
just describing what happened in class:

1. **`/post-notes <topic>`** — the instructor covered a topic in class and
   wants the notes for it live on the site.
2. **`/post-assignment <n> due <date>`** — post an assignment's problem set:
   questions visible, solutions locked.
3. **`/release-solutions <n>`** — a due date has passed: unlock the
   solutions in the book.

## Posting notes

1. Find the topic's source file(s) in `source/` (grep by topic words and by
   Thomas' Calculus section number, e.g. `ch-12-5.ptx`). If the notes don't
   exist yet, the instructor must provide content — never invent
   mathematical notes.
2. Make the section reachable from `source/main.ptx`: uncomment its
   `<xi:include>` or add one in the position the instructor indicates. Ask
   if the placement is ambiguous.
3. **Skeletal rule**: any exercises inside notes pages keep only their
   `<statement>` (questions). Solutions must not go live with the notes —
   wrap them with the SOLUTION-LOCKED convention below. (The instructor
   hands out skeletal/fill-in notes in class; the posted page mirrors them
   plus the completed exposition.)
4. Validate and build (see "Validating a change"), commit, push to the
   session's designated branch.
5. Add the syllabus-table row: `Notes: <topic>` linking to
   `https://mahmadi-ops.github.io/M13-Mehdi/<xml-id>.html`, today's date,
   `<mdash/>` for the due date.

## Posting an assignment

1. Assignment problems live as worksheets/exercise sets under the Exercises
   chapter (`source/exercises.ptx` includes one file per topic — follow that
   pattern; new sets go in a new `exercises-*.ptx` file included from
   `exercises.ptx`).
2. Every `<solution>`, `<answer>`, and `<hint>` of the assignment's problems
   must be wrapped in a SOLUTION-LOCKED comment (below) before pushing.
   `publication/publication.ptx` shows solutions book-wide, so an unwrapped
   `<solution>` is publicly visible the moment it reaches `main`.
3. Validate, build, commit, push.
4. Syllabus-table row: `Assignment <n>` with the link **and the due date**
   (assignments are due Fridays 11:59 PM; Wednesday in exam weeks 3, 6, 9).

## Releasing solutions (after the due date)

1. Find the locked blocks: `grep -rn "SOLUTION-LOCKED" source/`.
2. Confirm the named assignment's due date has actually passed (ask the
   instructor if the date in the marker is in the future).
3. Unlock by deleting **only the two marker lines** (the opening
   `<!-- SOLUTION-LOCKED ...` line and the closing `END SOLUTION-LOCKED -->`
   line), leaving the `<solution>`/`<answer>`/`<hint>` element intact and
   correctly indented.
4. Validate, build, commit, push.
5. Syllabus-table row: `Solutions: Assignment <n>`, today's date, and
   `was due <date>` in the due-date column.

## The SOLUTION-LOCKED convention

A solution that must stay hidden until a due date passes is committed
commented-out with these exact markers on their own lines:

```xml
<exercise xml:id="a3-p2">
  <statement>
    <p> ... the question, always visible ... </p>
  </statement>
<!-- SOLUTION-LOCKED assignment="3" due="2026-10-09"
  <solution>
    <p> ... </p>
  </solution>
END SOLUTION-LOCKED -->
</exercise>
```

- `due` is the assignment's due date, `YYYY-MM-DD`.
- XML comments cannot contain `--`: never nest another comment (or any
  `--`) inside a locked block; strip inner comments before wrapping.
- Locking is per-block, so one file may hold released and locked solutions
  side by side.
- The Runestone target (`publication-runestone.ptx`) withholds all
  solutions regardless; this convention only governs the public web/PDF
  targets.

## Validating a change

Before any push:

1. Well-formedness of every touched file:
   `xmllint --noout source/<file>.ptx` (locked blocks are comments, so a
   malformed marker shows up here).
2. If the PreTeXt CLI is available (`pip install -r requirements.txt`),
   run `pretext build web` and confirm it succeeds; then confirm the target
   page exists in `output/web/` to get the exact filename for the syllabus
   link. If the CLI can't be installed in the session, say so and derive
   the link from the section's `xml:id` instead.
3. Never mark a solution released, or notes posted, in the syllabus table
   before the corresponding push has actually been made.
