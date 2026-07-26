// ============================================================
//  APEX — YOUR POSTS
// ============================================================
//  This is the only file you need to touch to publish something
//  new — whether it's a homepage teaser or a full article page.
//
//  FIELDS:
//    id        — short unique slug, used in the URL (no spaces)
//    tag       — one of: "race", "tech", "paddock", "strategy"
//    title     — headline
//    summary   — 1-2 sentence teaser (shown on homepage + at top
//                of the article)
//    date      — e.g. "SEP 08"
//    readTime  — e.g. "9 MIN"
//    featured  — set true on ONE post to make it the big homepage
//                story. Only the first one found is used.
//    stats     — OPTIONAL panel of stats next to a featured post.
//                Delete it entirely if not needed.
//    body      — the full article. This is an ARRAY of paragraphs.
//                Each string becomes its own paragraph on the
//                post page. Add as many as you like.
//
//  Every post automatically gets its own page at:
//    post.html?post=THE_ID
//  You never need to create that page yourself — post.html reads
//  whichever id is in the URL and builds the page from this file.
// ============================================================

const POSTS = [

  {
    id: "undercut-died-2026",
    featured: true,
    tag: "strategy",
    title: "How the undercut quietly died in 2026 — and what teams do instead",
    summary: "Pit windows used to be won on a single early stop. This season the numbers tell a different story: degradation models tightened, tyre allocations shifted, and the teams still calling the old play are losing track position, not gaining it. We pulled every stop from the last six rounds to find out why.",
    date: "SEP 08",
    readTime: "9 MIN",
    stats: [
      { label: "UNDERCUT SUCCESS RATE", value: "31%" },
      { label: "FASTEST STOP THIS SEASON", value: "1.98s", color: "purple" },
      { label: "AVG. TYRE DELTA (LAP 12)", value: "+0.6s/lap" },
      { label: "OVERCUT WIN RATE", value: "54%", color: "green" },
      { label: "SOURCE", value: "6 RACES / 118 STOPS" }
    ],
    body: [
      "For years, the undercut was the closest thing strategy had to a cheat code. Pit early, put a fresh tyre on a driver still stuck in traffic, and let the lap-time delta do the rest. It worked because tyre falloff used to be steep and sudden — a driver on a 12-lap-old tyre was simply slower, full stop.",
      "That gap has been closing all season. Compound construction changes introduced over the winter flattened the degradation curve across the board, especially in the medium compound most teams lean on for the middle stint. The result: a car that pits a lap early isn't gaining nearly as much sudden pace advantage over the car that stays out.",
      "We pulled stop-by-stop data from the last six rounds — 118 pit stops in total — and the split is stark. Undercut attempts succeeded in putting a driver ahead on merit only 31% of the time, down from well over half in prior seasons. Meanwhile the overcut — staying out longer, then coming in on a tyre with more life left as others fade — is winning 54% of the time it's attempted.",
      "The teams that adapted fastest aren't necessarily the biggest names. It's the strategy groups willing to sit on their hands during a race, resist the instinct to react to a rival's pit call, and trust a model that says the free air a lap or two later is worth more than track position right now.",
      "None of this means the undercut is dead everywhere. Street circuits with heavy traffic and short pit lanes still reward it. But as a default opening move for the whole grid, its era looks to be ending — and the strategists still reaching for it out of habit are the ones losing ground."
    ]
  },


  // 👇 To add a new post, paste a new block here, e.g.:
  //
  // {
  //   id: "your-unique-slug",
  //   tag: "race",
  //   title: "Your new post title",
  //   summary: "One or two sentences describing the post.",
  //   date: "SEP 15",
  //   readTime: "6 MIN",
  //   body: [
  //     "First paragraph of the article.",
  //     "Second paragraph of the article."
  //   ]
  // },

];

window.POSTS = POSTS;
