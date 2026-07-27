// ============================================================
//  APEX — YOUR POSTS
// ============================================================
//  This is the only file you need to touch to publish something
//  new — whether it's a homepage teaser or a full article page.
//
//  ONLY "title" IS REQUIRED. Every other field below is optional —
//  delete any line you don't want and the page adjusts automatically
//  (no tag pill if you skip "tag", no date/read-time if you skip
//  those, etc). A post can be as small as this:
//
//  { title: "Quick paddock note" },
//
//  FIELDS:
//    id        — OPTIONAL. Short unique slug used in the URL. If you
//                leave it out, one is generated from the title
//                automatically.
//    tag       — OPTIONAL. One of: "race", "tech", "paddock", "strategy"
//                (controls the little colored label). Skip it and no
//                label is shown.
//    title     — REQUIRED. The headline.
//    summary   — OPTIONAL. 1-2 sentence teaser shown on the homepage,
//                and used as the article text if you don't write a
//                separate "body".
//    date      — OPTIONAL. e.g. "SEP 08"
//    readTime  — OPTIONAL. e.g. "9 MIN"
//    featured  — OPTIONAL. Set true on ONE post to make it the big
//                homepage story. Only the first one found is used —
//                if none are marked, the first post in the list
//                becomes the featured one automatically.
//    stats     — OPTIONAL panel of stats next to a featured post.
//                Leave it out entirely if not needed.
//    body      — OPTIONAL. The full article, as ONE block of text.
//                Just write normally — press Enter twice (leave a
//                blank line) wherever you want a new paragraph to
//                start. If you skip this, the post's page will just
//                show the "summary" text instead.
//
//  IMPORTANT: body text goes between backticks ( ` ), not quotes
//  ( " ). Backticks let you type apostrophes and quotation marks
//  in your writing without breaking anything. They're on the
//  same key as ~ on a US keyboard, top-left of the keyboard.
//
//  BOLD / ITALIC: wrap words in **double stars** for bold, or
//  *single stars* for italic — works in title, summary, and body.
//  Example: "The **31%** figure surprised even the strategists."
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
    body: `For years, the undercut was the closest thing strategy had to a cheat code. Pit early, put a fresh tyre on a driver still stuck in traffic, and let the lap-time delta do the rest. It worked because tyre falloff used to be steep and sudden — a driver on a 12-lap-old tyre was simply slower, full stop.

That gap has been closing all season. Compound construction changes introduced over the winter flattened the degradation curve across the board, especially in the medium compound most teams lean on for the middle stint. The result: a car that pits a lap early isn't gaining nearly as much sudden pace advantage over the car that stays out.

We pulled stop-by-stop data from the last six rounds — 118 pit stops in total — and the split is stark. Undercut attempts succeeded in putting a driver ahead on merit only **31% of the time**, down from well over half in prior seasons. Meanwhile the overcut — staying out longer, then coming in on a tyre with more life left as others fade — is winning **54% of the time** it's attempted.

The teams that adapted fastest aren't necessarily the biggest names. It's the strategy groups willing to sit on their hands during a race, resist the instinct to react to a rival's pit call, and trust a model that says the free air a lap or two later is worth more than track position right now.

None of this means the undercut is dead everywhere. Street circuits with heavy traffic and short pit lanes still reward it. But as a default opening move for the whole grid, its era looks to be ending — and the strategists still reaching for it out of habit are the ones losing ground.`
  },

  {
    id: "monza-three-corners",
    tag: "race",
    title: "Monza in slow motion: the three corners that decided P1",
    summary: "Braking traces, throttle overlays, and the 0.4s that separated the front row.",
    date: "SEP 08",
    readTime: "9 MIN",
    body: `Replace this placeholder with your full article — just type normally in this space between the backticks.

Leave a blank line whenever you want to start a new paragraph, like this one.`
  },

  {
    id: "floor-edge-wings",
    tag: "tech",
    title: "Floor edge wings are back — here's what changed under the regs",
    summary: "A quiet aero loophole is reshaping the midfield's downforce numbers.",
    date: "SEP 05",
    readTime: "6 MIN",
    body: `Replace this placeholder with your full article — just type normally between the backticks.`
  },

  {
    id: "silly-season-clauses",
    tag: "paddock",
    title: "Silly season heats up: reading between the contract clauses",
    summary: "Three seats, two rumors, and one release clause nobody's talking about.",
    date: "SEP 03",
    readTime: "5 MIN",
    body: `Replace this placeholder with your full article — just type normally between the backticks.`
  },

  {
    id: "safety-car-math",
    tag: "strategy",
    title: "Safety car math: when a free stop actually costs you the race",
    summary: "A model for the decision every strategist dreads making in real time.",
    date: "AUG 30",
    readTime: "8 MIN",
    body: `Replace this placeholder with your full article — just type normally between the backticks.`
  },

  {
    id: "power-unit-deal-2028",
    tag: "tech",
    title: "Inside the power unit deal that could reshape the grid in 2028",
    summary: "Who's manufacturing, who's buying, and why it matters for the budget cap.",
    date: "AUG 27",
    readTime: "10 MIN",
    body: `Replace this placeholder with your full article — just type normally between the backticks.`
  },

  {
    // A minimal example — proof that only "title" is required.
    // No id, tag, summary, date, readTime, or body. It'll still show
    // up on the homepage and get its own working page.
    title: "Quick paddock note: nothing official yet on the 2028 calendar"
  }

  // 👇 To add a new post, paste a new block here, e.g.:
  //
  // {
  //   id: "your-unique-slug",
  //   tag: "race",
  //   title: "Your new post title",
  //   summary: "One or two sentences describing the post.",
  //   date: "SEP 15",
  //   readTime: "6 MIN",
  //   body: `Write your first paragraph here.
  //
  // Leave a blank line, then write your next paragraph here.
  // Keep going for as long as the article needs to be.`
  // },

];

window.POSTS = POSTS;
