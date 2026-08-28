---
name: post-notes
description: Post the class notes for a topic the instructor covered in class — make the topic's section live in the published book and log it in the syllabus posted-materials table. Use when the instructor says they covered a topic and wants the notes posted/published/up.
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
   push to the session's designated branch.
5. In `mahmadi-ops/MATH13-Syllabus-Fall2026`, add a row to the top of the
   table in `source/updates.ptx`: today's date, `Notes: <topic>` linked to
   the section's page (`https://mahmadi-ops.github.io/M13-Mehdi/<xml-id>.html`),
   `<mdash/>` for due date. Commit and push there too. If that repo isn't in
   the session and can't be added, output the ready-to-paste `<row>` instead.
