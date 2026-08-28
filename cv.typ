// Michael Engel — CV
// Recreates the layout/styling of mike-engel.com/cv in Typst
#import "cv_strings.typ": strings
#let lang = sys.inputs.at("lang", default: "en")
#let t = strings.at(lang)

#let fg = rgb("#0B2940")
#let bg = white
#let lighter = rgb("#7B92A4")
#let darker = rgb("#355873")
#let accent = rgb("#9D062C")
#let dot-color = rgb("#CFE1EE")

// the same polka-dot texture used on the site's summary box and sidebar
#let dots = tiling(size: (1.4pt, 1.4pt))[
  #rect(width: 0.75pt, height: 0.75pt, fill: white, stroke: none)
  #place(center + horizon, circle(radius: 0.375pt, fill: dot-color))
]

#set page(paper: "a4", margin: 10mm)
#set text(font: "Inter UI", size: 10pt, fill: fg, lang: lang, alternates: true)
#set par(leading: 6pt, justify: false)

#show link: it => underline(
  offset: 2pt, stroke: 1.4pt + accent, text(fill: accent, it),
)

#let section-title(body) = block(
  above: 1em, below: 1em, breakable: false,
  text(size: 12pt, weight: "bold", fill: fg, body),
)

#let entry(company, role: none, dates: none, bullets: ()) = block(
  below: 1.5em,
)[
  #text(size: 10pt, weight: "bold", fill: fg, company) \
  #if role != none [
    #text(size: 9pt, fill: fg, role) \
  ]
  #if dates != none [
    #text(size: 8.5pt, fill: darker, dates)
  ]
  #v(0.75em, weak: true)
  #for b in bullets [
    #block(below: 0.5em,
      text(size: 10pt)[- #b]
    )
  ]
]

#let skill-cat(title, body) = block(below: 2em, breakable: false)[
  #text(size: 10pt, weight: "bold", fill: fg, title) \
  #text(size: 9.3pt, body)
]

// ---- header ----

#block(below: 2em)[
  #text(size: 26pt, weight: "bold", fill: fg)[Michael Engel]
]

// ---- two-column body: content (2fr) + sidebar (1fr) ----

#grid(
  columns: (2fr, 1fr),
  column-gutter: 5mm,

  // ===== CONTENT COLUMN =====
  [
    #block(
      fill: dots, stroke: (left: 3pt + accent), inset: 4mm,
      below: 1.5em,
    )[
      #text(size: 10pt, weight: "medium")[
        #t.summary
      ]
    ]

    #section-title[#t.experience.heading]

    #for experience in t.experience.items [
      #entry(
        experience.company,
        role: experience.title,
        dates: experience.time,
        bullets: experience.items,
      )
    ]

    #section-title[#t.education.heading]

    #entry(
      "Rocky Mountain College of Art + Design",
      dates: t.education.time,
      bullets: (t.education.title,),
    )
  ],

  // ===== SIDEBAR COLUMN =====
  layout(size => {
    block(fill: dots, inset: 4mm, width: 100%, height: size.height * 200% - 1.38cm)[
      #set text(size: 8.5pt)
      #block(below: 2em)[
        #text(weight: "bold", size: 10pt)[mike\@mike-engel.com] \
        #v(0.75em, weak: true)
        #t.location \
        #t.nationality \
        #t.language \
        #link("https://mike-engel.com")[mike-engel.com] \
        #link("https://github.com/mike-engel")[github.com/mike-engel] \
        #link("https://www.linkedin.com/in/vegemike")[linkedin.com/in/vegemike]
      ]

      #section-title[#t.skills.heading]

      #for skill in t.skills.items [
        #skill-cat(skill.heading, skill.items)
      ]
    ]
  })
)
