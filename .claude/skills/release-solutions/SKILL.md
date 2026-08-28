---
name: release-solutions
description: Release (unlock) the solutions of an assignment in the published course-notes book after its due date has passed, and log the release in the syllabus posted-materials table. Use when the instructor says a due date passed or asks to post/release/unlock solutions.
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
5. In `mahmadi-ops/MATH13-Syllabus-Fall2026`, add a row to the top of the
   table in `source/updates.ptx`: today's date,
   `Solutions: Assignment <n>` linked to the page holding the problems, and
   `was due <date>` in the due-date column. Commit and push there too; if
   the repo can't be added to the session, output the ready-to-paste
   `<row>`.
