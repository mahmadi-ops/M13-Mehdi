---
name: post-notes
description: Post the completed class notes for a topic the instructor covered in class — make the topic's section live in the published book and log it on the Posting Desk. Use when the instructor says they covered a topic and wants the notes posted/published/up.
---

# Post class notes for a topic

Argument: the topic (name and/or Thomas' Calculus section number), e.g.
`/post-notes 12.5 Lines and Planes in Space`.

Follow the **Posting notes** workflow in this repo's `CLAUDE.md`, in short:

1. Locate the topic's file(s) in `source/` (grep topic words and `ch-<n>-<m>`
   section numbers). No existing notes → ask the instructor for the content;
   never write mathematical notes they didn't supply.
2. Make the section reachable from `source/main.ptx` (uncomment or add its
   `<xi:include>`); ask if placement is ambiguous. Change nothing else about
   the book's structure.
3. Enforce the skeletal rule: exercises in the posted notes show questions
   only — wrap any `<solution>`/`<answer>`/`<hint>` with the SOLUTION-LOCKED
   markers defined in `CLAUDE.md`.
4. Validate (`xmllint`, and `pretext build web` when available), commit,
   push to the session's designated branch. The page goes live at
   `https://mahmadi-ops.github.io/M13-Mehdi/<xml-id>.html`.
5. Update the Posting Desk panel's state (posted date, log entry) per
   `CLAUDE.md`. (The syllabus's posted-materials table was removed at the
   instructor's request — no syllabus row any more.)
