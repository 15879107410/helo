# Homepage Prototype Baseline

This folder freezes the current unlogged-in Helo homepage prototype before production refactoring.

## Purpose

- Keep a visual and code reference for the approved prototype.
- Let future refactoring compare against the exact TSX and CSS that produced the current page.
- Avoid losing layout, spacing, animation, copy, or styling details while splitting the page into smaller production files.

## Files

- `page.prototype.tsx`: frozen copy of `/app/page.tsx`.
- `globals.prototype.css`: frozen copy of `/app/globals.css`.

## Rules

- Do not import these files into the running app.
- Do not edit these files during refactoring unless intentionally updating the baseline.
- Use them only as a reference when checking whether the refactored homepage still matches the approved prototype.

## Created

2026-05-07

