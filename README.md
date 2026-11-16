# AHEAD website: handover guide

This folder **is** the AHEAD website (AI Human Empowerment & Development). GitHub publishes it for free at:

- English: https://ahead-international.github.io/
- Arabic: https://ahead-international.github.io/ar/

It belongs to the **AHEAD organization**, not to any one person. Read this before you change anything.

---

## The accounts (keep this list up to date)

| What | Login email | Who has access | Notes |
|---|---|---|---|
| Shared AHEAD email (Gmail) | _fill in_ | _2+ names_ | Password and recovery codes live in the private handover doc, **not here** (this page is public) |
| GitHub organization `ahead-international` | shared AHEAD email | Owners: _name 1_, _name 2_ | Always keep at least 2 owners |
| Instagram @ahead_international | _fill in_ | _names_ | |
| Domain name (later) | shared AHEAD email | _names_ | Renewal date: _fill in_ |
| Google Search Console | shared AHEAD email | _names_ | |

> **Never** sign up for anything AHEAD uses with a personal email.
> **Never** paste passwords into this file: anyone on the internet can read it.

---

## How to fix a typo or change text (no coding needed)

1. Log in to GitHub and open this repository.
2. Click **`index.html`** for the English page, or the **`ar`** folder → **`index.html`** for the Arabic page.
3. Click the **pencil icon** (✏️ Edit).
4. Press **Ctrl+F** (Cmd+F on Mac) and search for the words you want to change.
5. Change the text. Only change words between quotes ' ' or between tags; don't delete symbols like `{ } [ ] , ' "`.
6. Click **Commit changes**, write what you changed (e.g. "Fix typo on Finance page"), and confirm.
7. Wait 1–2 minutes and refresh the website.

**Important:** both files contain the whole site. If you change shared content (an article, a description), make the same change in **both** `index.html` and `ar/index.html`.

**Made a mistake?** Every change is saved in history. Open the file → **History** → pick the last good version, or ask a technical member to revert it. Nothing is ever lost.

## Adding or changing team members ("Meet the team")

Team members live in **one file: `team.js`**. It updates the English and Arabic pages at the same time.

1. **Photo (optional):** open the **`team`** folder → **Add file** → **Upload files** → drag in a square photo named in small letters with no spaces (e.g. `julie.jpg`) → **Commit changes**.
2. Open **`team.js`** → pencil icon ✏️.
3. Copy one person's whole block, from `{` to `},`, and paste it under the last person.
4. Change only the words between the quotes `" "`: name and role in English (`en`) and Arabic (`ar`), the photo as `"team/julie.jpg"`, and an optional LinkedIn link.
5. **Commit changes.** The site updates in 1–2 minutes.

No photo yet? Leave `photo: ""` and the site shows the person's initials. The instructions are also written at the top of `team.js`.

## Where the content lives inside the file

- **Functions** (Marketing, Management…): search for `const MAJORS`
- **Starter articles**: search for `const ARTICLES`
- **Team articles** (long ones with sources): search for `const TEAM_ARTICLES`
- **All interface text in English and Arabic**: search for `const T = {`

## Adding a new article

Copy an existing article block inside `TEAM_ARTICLES` (from `{ id:'…'` to the matching `},`), paste it below, then change the `id` (must be unique, e.g. `mk-ads`), `major`, `title`, `summary` and `body`. If unsure, ask Claude or a technical member to do it.

---

## Every year when leadership changes (handover checklist)

- [ ] New lead added as **Owner** of the GitHub organization (Organization → People → Invite → role: Owner)
- [ ] New lead given the shared email password and recovery codes
- [ ] Departing members removed only **after** the new owners have confirmed they can log in
- [ ] The accounts table above updated
- [ ] Domain renewal date checked
- [ ] Handover date for next year: _fill in_

## Files in this folder

| File | What it does |
|---|---|
| `index.html` | The full website in English |
| `ar/index.html` | The same website in Arabic (right-to-left) |
| `team.js` | The "Meet the team" list (names, roles, photos) for both languages |
| `team/` | Team photos |
| `404.html` | Sends visitors from broken links back to the homepage |
| `robots.txt`, `sitemap.xml` | Help Google find both language versions |
| `README.md` | This guide |

If the organization or address ever changes, update the address `https://ahead-international.github.io/` inside `index.html`, `ar/index.html`, `404.html`, `robots.txt` and `sitemap.xml`.
