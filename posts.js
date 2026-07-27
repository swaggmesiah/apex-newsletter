// ============================================================
//  APEX — YOUR POSTS
// ============================================================
//  This is the only file you need to touch to publish something
//  new — whether it's a homepage teaser or a full article page.
//
//  ORDER MATTERS: list your newest post FIRST (right after the
//  opening bracket below), oldest last. The homepage only shows
//  your most recent posts (see homepagePostCount in config.js) —
//  everything else is still there, just one click away on the
//  Archive page, in the same order you've listed them here.
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
//  IMAGES:
//    image        — OPTIONAL. A cover image URL for the top of the
//                   post (and a small thumbnail on the homepage if
//                   it's the featured post).
//    imageCaption — OPTIONAL. Small credit/caption text shown under
//                   the cover image, e.g. "Photo: Getty Images"
//
//    To drop an image IN THE MIDDLE of an article, put a line like
//    this on its own (blank line above and below it) inside "body":
//
//      ![Caption or credit goes here](https://example.com/photo.jpg)
//
//    The caption is optional — ![](https://example.com/photo.jpg)
//    works too, it just won't show any text under the image.
//
//  Every post automatically gets its own page at:
//    post.html?post=THE_ID
//  You never need to create that page yourself — post.html reads
//  whichever id is in the URL and builds the page from this file.
// ============================================================

const POSTS = [

  // 👇 NEW POSTS GO HERE, AT THE TOP — paste a fresh block like this
  // one above whatever was previously first, e.g.:
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

  {
    id: "welcome-to-apex",
    featured: true,
    tag: "strategy",
    title: "Welcome to APEX! - A newsletter dedicated to every aspect of what makes F1 great.",
    summary: "For us at APEX newsletter, every Grand Prix is another story yet to unfold. From strategy, tech that goes into the cars making them ever so complicated, to regulation changes, upgrades, paddock talks and much more to talk about. If that sounds like your ideal Formula 1 coverage, feel free to subscribe to our newsletter in order to get a new edition for every race.",
    date: "JUL 27",
    readTime: "3 MIN",
    body: ``
  },

];

window.POSTS = POSTS;
