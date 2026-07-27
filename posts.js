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
//    body      — the full article, as ONE block of text. Just
//                write normally — press Enter twice (leave a
//                blank line) wherever you want a new paragraph
//                to start. That's it.
//
//  IMPORTANT: body text goes between backticks ( ` ), not quotes
//  ( " ). Backticks let you type apostrophes and quotation marks
//  in your writing without breaking anything. They're on the
//  same key as ~ on a US keyboard, top-left of the keyboard.
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
    title: "Welcome to APEX! - A newsletter fully immersed into every essential aspect that makes F1 the sport it is.",
    summary: "What sets APEX apart from it's competition is that our newsletter does not involve gossip materials, we focus on what is front of us and only what is front of us. If you're into the essnetials of this sport, feel free to subscribe for the newsletter to recieve your very own specialized news on your e-mail..",
    date: "JUL 27",
    readTime: "3 MIN",
    body: ' ',
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
