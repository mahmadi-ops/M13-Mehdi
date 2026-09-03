---
name: release-solutions
description: Release (unlock) an assignment's locked solutions after its due date has passed (the standing ten assignments live in the M13-Skeletal-Notes book), and log the release on the Posting Desk. Use when the instructor says a due date passed or asks to post/release/unlock solutions.
---

# Release an assignment's solutions

Argument: the assignment number, e.g. `/release-solutions 3`.

Follow the **Releasing solutions** workflow in this repo's `CLAUDE.md`:

1. `grep -rn "SOLUTION-LOCKED" source/` and select the blocks with the
   matching `assignment="<n>"` (or matching topic if the instructor named a
   topic instead).
2. Check the `due` date in the markers is in the past. If it isn't, confirm
   with the instructor before releasing early.
3. Unlock each block by deleting **only** the opening
   `<!-- SOLUTION-LOCKED ...` line and the closing `END SOLUTION-LOCKED -->`
   line; keep the `<solution>`/`<answer>`/`<hint>` element and its
   indentation intact.
4. Validate (`xmllint` on each touched file; `pretext build web` when
   available), commit, push to the session's designated branch. Re-grep to
   confirm no marker fragments remain in the released blocks.
5. Update the Posting Desk panel's state (released/solutions state, log
   entry) per `CLAUDE.md`. (The syllabus's posted-materials table was
   removed at the instructor's request — no syllabus row any more. The
   ten standing assignments and their solutions live in
   `mahmadi-ops/M13-Skeletal-Notes`.)
