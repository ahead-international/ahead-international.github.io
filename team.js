/* =====================================================================
   AHEAD WEBSITE: MEET THE TEAM
   This one file controls the "Meet the team" section on BOTH the
   English and the Arabic pages. Edit it here; nothing else needs to change.

   ── HOW TO ADD A PERSON ───────────────────────────────────────────────
   1. PHOTO (optional): upload it into the "team" folder.
        • Square photo works best (about 600 × 600 px), JPG or PNG
        • File name: small letters, no spaces, e.g.  julie.jpg  or  riad-tawil.png
      No photo yet? Leave  photo: ""  and the site shows their initials instead.

   2. TEXT: copy ONE whole block below, from  {  to  },  and paste it
      under the last person (before the line  ];  at the very bottom).

   3. Fill in the words BETWEEN the quotes " ":
        name  → their full name, in English (en) and Arabic (ar)
        role  → their position on the team, in English and Arabic
        photo → "team/" + the photo's file name, e.g.  "team/julie.jpg"
        linkedin → their full LinkedIn link, or leave ""

   4. Keep every quote mark " , comma , and bracket { } exactly as they are.
      People appear on the site in the same order as in this list.

   5. Click "Commit changes". The site updates within 1–2 minutes.

   ── HOW TO REMOVE OR REORDER ──────────────────────────────────────────
   Delete a whole block (from { to },) to remove someone, or cut and paste
   a whole block higher or lower to change the order.
   ===================================================================== */

window.AHEAD_TEAM = [

  {
    name:     { en: "Julie Abou Chahine", ar: "جولي أبو شاهين" },
    role:     { en: "Founder",            ar: "المؤسِّسة" },
    photo:    "",          // e.g. "team/julie.jpg"
    linkedin: "",          // e.g. "https://www.linkedin.com/in/..."
  },

  /* ── COPY FROM HERE (remove the  /*  above and the  * /  below when you use it) ──
  {
    name:     { en: "Full Name",  ar: "الاسم الكامل" },
    role:     { en: "Position",   ar: "المنصب" },
    photo:    "team/file-name.jpg",
    linkedin: "",
  },
  ── TO HERE ── */

];
