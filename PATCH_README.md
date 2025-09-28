# Fonts Patch (Minion Pro)

This patch **does not replace** your existing files. It adds the `@font-face` rules and (optionally) a small CSS to actually use Minion on the page.

## Step 1 — Pick the correct path variant
- If your fonts are under `/assets/fonts/MinionPro-*.woff2`, use:  
  `<link rel="stylesheet" href="/assets/css/fonts.css?v=1">`
- If your fonts are under `/fonts/MinionPro-*.woff2`, use:  
  `<link rel="stylesheet" href="/assets/css/fonts-root.css?v=1">`

## Step 2 — (Optional) Enable Minion globally
Add this **after** the link above:
```html
<link rel="stylesheet" href="/assets/css/fonts-use.css?v=1">
```
If your existing CSS already sets `font-family: "Minion Pro"`, you can skip this.

## Step 3 — Insert links into <head>
Open your `index.html` and add the chosen link(s) just **before** your main site CSS. Example:
```html
<link rel="stylesheet" href="/assets/css/fonts.css?v=1">
<link rel="stylesheet" href="/assets/css/fonts-use.css?v=1">
<link rel="stylesheet" href="/assets/css/site.css?v=1">
```

## Step 4 — Verify
Open your site with a cache buster, e.g.: `/?bust=fonts-20250928020434`

## Notes
- Filenames must match: `MinionPro-Regular.(woff2|woff)`, `...-Italic`, `...-Bold`, `...-BoldItalic`.
- If your filenames differ, either rename them or edit the URLs inside the CSS files in this patch.

Generated 2025-09-28 02:04:34
