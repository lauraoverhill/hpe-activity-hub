# HPE Activity Hub content guide

The whole site is public. The audience field is a clear publishing label, not access control.

## Where content goes

| Content | Folder | Audience |
| --- | --- | --- |
| A topic grouping | `src/content/units/` | teacher and/or learner |
| A student-facing activity | `src/content/activities/` | learner, surfaced within its unit/topic |
| Planning or facilitation material | `src/content/resources/` | teacher |
| A reusable interactive or utility | `src/content/tools/` | teacher and/or learner |

## Publishing rule

New entries start with `status: draft`. Change to `status: published` only when the content is ready for the public site.

## Example learner activity

```md
---
title: Making a safe choice
description: A short scenario activity about choosing a safer response.
unit: illicit-drugs
yearLevels: ['Year 8']
duration: 15 minutes
audience: learner
status: draft
---

# Making a safe choice

Write the activity instructions here.
```

Keep teacher-only context in `resources/` and learner-ready instructions in `activities/`. This makes the site easy to browse while keeping its public nature clear.
