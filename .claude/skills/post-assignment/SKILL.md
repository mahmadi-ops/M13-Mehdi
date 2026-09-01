---
name: post-assignment
description: Post an assignment's problem set to the course-notes book with questions visible and solutions locked until the due date, and log it with its due date in the syllabus posted-materials table. Use when the instructor wants an assignment/problem set posted.
---

# Post an assignment (questions now, solutions locked)

Arguments: assignment number and due date, e.g.
`/post-assignment 3 due 2026-10-07`. If either is missing, ask.
(Assignments are due Fridays 11:59 PM, but Wednesday in exam weeks 3, 6,
and 9 — sanity-check the given date against that.)

Follow the **Posting an assignment** workflow in this repo's `CLAUDE.md`:

1. Put the problems where the instructor's content says they go — an
   existing `exercises-*.ptx` file, or a new one included from
   `source/exercises.ptx`, following the existing pattern. Never invent
   problems or solutions; the instructor supplies them.
2. Wrap **every** `<solution>`, `<answer>`, and `<hint>` of the
   assignment's problems in SOLUTION-LOCKED markers (see `CLAUDE.md`) with
   `assignment="<n>" due="<YYYY-MM-DD>"`. Unwrapped solutions go public on
   deploy — double-check with `grep -n "<solution>" ` on the touched files
   that each one sits inside a locked block.
3. Validate (`xmllint`, `pretext build web` when available), commit, push
   to the session's designated branch.
4. Update the Posting Desk panel's state (posted date, due date, log
   entry) per `CLAUDE.md`. (The syllabus's posted-materials table was
   removed at the instructor's request — no syllabus row any more.
   Note the ten standing assignments live in `mahmadi-ops/M13-Skeletal-Notes`
   and are posted by toggling their includes there; this skill's
   solution-locking steps apply to whichever repo holds the problems.)
5. Offer to schedule the solution release for after the due date if the
   session has a scheduling tool; otherwise remind the instructor to run
   `/release-solutions <n>` once the due date passes.
