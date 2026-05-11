# Dynamic Website Content System (USCAP)

## Overview

To improve consistency and reduce manual updates across USCAP websites, we use a client-side templating system powered by JavaScript.

This system allows shared content (such as “Foundation”, locations, pricing, and links) to be updated in one place and automatically reflected across the site.

It is designed to work within Divi 4 and Divi5 using a global script and requires no backend changes.

---

## Why This Exists

As organizational terms change (e.g., “Foundation” moving into Advancement), updating every instance manually across the website becomes:

- Time-consuming
- Error-prone
- Difficult to maintain

This system solves that by introducing centralized variables.

---

## System Architecture

There are two main components:

### 1. Logic Script (Global)

Handles applying variables to the page.

Location:
https://uscap.org/custom-scripts/scripts/template-logic.js

### 2. Data File (Per Website)

Defines the actual values used on each site.

Example (2027 Annual Meeting):
https://2027am.uscap.org/custom-scripts/data/template-data.js

Each website can have its own dataset while using the same logic system.

---

## How It Works

When a page loads:

1. The script scans the page for elements with:
    - data-content
    - data-src
    - data-href

2. It matches those attributes to keys in global JavaScript objects:
    - window.contentVars
    - window.srcVars
    - window.hrefVars

3. It replaces the content dynamically in the browser.

---

## How to Use

### Text Content

HTML:

<p data-content="location"></p>

JavaScript:
window.contentVars = {
location: "Vancouver Convention Centre"
};

Result:

<p>Vancouver Convention Centre</p>

---

### Images

HTML:
<img data-src="logo">

JavaScript:
window.srcVars = {
logo: "https://example.com/logo.png"
};

---

### Links

HTML:
<a data-href="registration">Register</a>

JavaScript:
window.hrefVars = {
registration: "https://example.com/register"
};

(All links open in a new tab automatically)

---

## What You Can Edit

IT Admin users can safely edit:

- Text values in window.contentVars
- Image URLs in window.srcVars
- Link URLs in window.hrefVars

No HTML or JavaScript changes are required.

---

## Rules

- Keys must match exactly (case-sensitive)
- Only values should be edited, not structure
- Do not rename or remove variables without checking usage

---

## Troubleshooting

If content is not updating:

- Verify the key exists in the correct variable object
- Check spelling and casing
- Confirm the script is loaded on the page

Console error example:
"location not found in window.contentVars"

---

## Summary

This system provides a centralized way to manage dynamic content across USCAP websites, reducing manual updates and improving consistency across all pages.
