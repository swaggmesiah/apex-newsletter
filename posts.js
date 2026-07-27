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
  {
    id: `mclaren-hungaroring-26`,
    featured: true,
    tag: `strategy`,
    title: `How McLaren Won the Hungarian Grand Prix`,
    summary: `Lando Norris took the checkered flag at the Hungaroring, with the reigning champion delivering his strongest performance of the season at a race where strategy once again showed just how decisive it can be`,
    date: `JUL 27`,
    readTime: `8 MIN`,
    body: `After being crowned last year’s champions, McLaren struggled to adapt to the new regulations. Having brought 5 updated components, with one involving their **very own unique “Macarena” wing** to this weekend’s race at Hungary and nailing the fastest lap among the Free Practice sessions, it would have only made sense for the team to raise their expectations for the weekend ahead. 

Lando Norris managed to put his McLaren to pole position on Saturday’s qualifying with a very fine margin of 0.012 seconds. Despite the poor performances that disappointed him during Free Practice 1, Norris had the last laugh at Qualifying topping all three of the sessions. 

While Oscar Piastri on the other hand had struggled to keep up with his teammate and was unfortunate on his side. Ending the last qualifying session P5, Piastri was 0.477 seconds behind his teammate, further moved up to P3 after grid penalties were given to both Antonelli and Hamilton.

Sunday’s performance proved that McLaren’s success was not just bound by luck; pace and strategy were actually on their side. A race that was widely expected to be a Ferrari favourite by the track’s characteristics and past results, proved a different outcome was on the table. Whether it’s their updates working all around or just for this specific track will be revealed at the Dutch Grand Prix 21st of August, however, it is safe to say reigning champions are moving in the right direction to be joining this season’s top 3 of the Constructor’s Championship. 

With both McLaren’s starting the race on medium compound just like most of the grid, it seemed as the only sensible option considering the weather and the track accommodating the stickiest tyre line-up of Pirelli’s. Seen before in its history of races, Hungaroring is a track that only allows 2 stops, precise steering and throttle inputs. Track involves many twisted corners allowing mostly creative moves to be done in order to overtake. 

Early race, Piastri jumping into P1 from the very start, saw Norris struggle with the dirty air produced by his teammate up as he reported it over the radio during the opening laps of the Grand Prix. McLaren bringing 2 front wing components to the track for flow conditioning around front tyres and increased brake cooling specifically for the track, it meant that dirty air produced by the car in front had more opportunities to create substantial drag, reduction on downforce and as a main outcome – understeer, leading to harder turn-ins. 

As the race went on for the first 16 laps, it was evident that McLaren’s had roughly a -0.2 second advantage when compared to their performance under dirty air, as Piastri managed to open the gap to his teammate behind over 2 seconds after lap 10. 
However, after lap 13, both cars started to struggle with extreme tyre degradations on the mediums, resulting in their lap times dropping up to 0.8 seconds per lap. Finishing their medium stints respectively at lap 16 (Piastri) and 17 (Norris), McLaren chose to then move onto the hard tyres for their next stint. 

With Piastri starting to experience rear tyre issues during lap 27 of his first hard tyre stint of the race, McLaren, seeing Piastri’s pace visibly drop by 0.8 seconds per lap, pitted him in 33rd lap of the race, moving him to his second hard tyre stint of the race. While Norris on the other hand, had visible pace left on his tyres as he actually got better after the 35th lap, dropping from mid 1:25’s to high 1:24’s.

Pitting at 39th lap Norris comfortably finished his first hard tyre stint moving onto his second hard tyre stint. As he held a comfortable lead to Verstappen by 8.2 seconds and Antonelli by 13 seconds, he performed a perfect undercut against his teammate which pitted 6 laps earlier than him. 

In the middle of lap 40, Piastri and Sainz had a moment where Piastri, while lapping Sainz in Williams, got blocked off by him which made Piastri furious on the team radio, but further investigation proved Sainz to be clear of any penalties. 
Lap 56 was the lap that determined the end of Piastri’s race, as he had a gearbox failure stranding him in the middle of the 3rd corner, causing a Virtual Safety Car to come out just 14 laps to go. 

Norris, pits under the VSC taking advantage of the entire pack slowing down, marking his 3rd stop, 14 seconds ahead of P2 Hamilton. Passing onto his used 4-laps-used tyres for the final stint of the race. 

As the track temperatures started to drop near the end of the race, soft tyres finally revealed the pace that was hidden in the cars since the very start of the Grand Prix. 

Norris respectively putting in his fastest lap of the session at 64th lap, and extending his lead from P2 Verstappen roughly 1.5 second per lap near the end of the race, was destined to end up in P1 but anywhere else.`
},
  
];

window.POSTS = POSTS;
