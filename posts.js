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
    id: "welcome-to-apex",
    featured: true,
    tag: "strategy",
    title: "Welcome to APEX! - A newsletter that is fully immersed into every aspect of what makes F1 great.",
    summary: "What makes APEX different from the competition is that for us, every race is another story to see it unfold. We're just as excited to share our knowledge and information about the second-most-grossing sport of all time. If you're interested, you can subscribe to our newsletter to get a new report for every race.",
    date: "JUL 27",
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
