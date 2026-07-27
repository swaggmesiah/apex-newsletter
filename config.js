// ============================================================
//  APEX — SITE SETTINGS
// ============================================================
//  Small site-wide settings that aren't tied to any one post.
//
//  homepagePostCount — how many stories show in the "Latest
//    dispatches" timing sheet on the homepage. Older posts don't
//    disappear — they just move to the Archive page automatically.
//
//  nextRace — powers the live "NEXT LIGHTS OUT" countdown in the
//    hero section. Update this before each race weekend.
//      name — shown next to the countdown, e.g. "Singapore GP"
//      date — the lights-out time, in this exact format:
//             "YYYY-MM-DDTHH:MM:00+00:00"
//             That's year-month-day, then T, then 24-hour time,
//             then your UTC offset (e.g. +03:00 for Turkey time).
//             Example: 8:00 PM on September 20, 2026, Turkey time:
//             "2026-09-20T20:00:00+03:00"
// ============================================================

window.SITE_CONFIG = {
  homepagePostCount: 5,
  nextRace: {
    name: "Dutch Grand Prix",
    date: "2026-09-21T10:00:00+03:00"
  }
};
