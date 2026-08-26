// Michael Engel — CV
// Recreates the layout/styling of mike-engel.com/cv in Typst

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
#set text(font: "Inter UI", size: 10pt, fill: fg, lang: "en", alternates: true)
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
    #block(below: 0.75em,
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
        Senior Frontend Engineer with over 15 years of experience building
        complex, user-driven web applications across fintech, healthcare, and
        SaaS. Specializing in React, Ember, TypeScript, and design
        systems—including leading large-scale migrations across data
        architecture, security, and billing, while maintaining full backward
        compatibility. Known for partnering closely with design and
        engineering to ship accessible, consistent features used by
        thousands of companies daily.
      ]
    ]

    #section-title[Experience]

    #entry(
      "Customer.io",
      role: "Senior front end engineer",
      dates: "October 2019 – Current | Remote",
      bullets: (
        "Drove system-wide architectural changes including a granular permissions overhaul and billing vendor migration, while preserving full backward compatibility and deploying incremental work in progress",
        "Architected and led 5+ full-stack projects end-to-end, from technical design through delivery",
        "Spearheaded incremental framework and technology modernization across a 13+ year old codebase, driving team-wide adoption without disrupting active development",
        "Mentored junior developers through videos, pair programming, shared knowledge documents, and structured pull request reviews",
        "Built and shipped new features for a multi-product application used by over 8,000 companies globally",
        "Partnered with stakeholders to scope, prioritize, and deliver complex technical projects, translating ambiguous requirements into clear engineering plans",
        "Co-built and maintained a multi-framework design system adopted across the full product suite",
      ),
    )

    #entry(
      "Consulting / Self development",
      dates: "January 2019 – October 2019 | Boulder, CO, USA",
      bullets: (
        "Designed, architected, and developed a financial web app which gives users a better view into their cash flow across multiple accounts. More information available upon request",
        "Created and maintain open source projects (styled-typography, a11y-css-reset, now-importer, gistcard, jwt-cli), and managing new issues and PRs",
        "Worked with clients to plan and execute on changing customer priorities and site redesigns",
        "Experimented with new languages and technologies such as rust, swift, and functional programming to evaluate the problems they solve and continue learning new concepts and ideas",
      ),
    )

    #entry(
      "Unself",
      role: "Senior developer / Acting engineering manager",
      dates: "July 2017 – December 2018 | Boulder, CO, USA",
      bullets: (
        "Took on the role of Engineering Manager to better manage individual team members and the entire team's interaction with the rest of the company",
        "Led a team of 5 full-stack developers creating a mobile-first web app for volunteers and non-profit organizations to track hours, attendance, and financial resources",
        "Spearheaded an app-wide visual redesign, collaborating closely with design, product management",
        "Mentored the team on functional programming, better testing practices (simplifying tests, removing redundant tests, etc), type safety, and several technologies to improve quality of life",
      ),
    )

    #entry(
      "Welltok",
      role: "Lead software engineer / Team lead",
      dates: "November 2015 – July 2017 | Denver, CO, USA",
      bullets: (
        "Led a team of 8 developers responsible for creating a new lightweight, node.js service with functional programming in mind",
        "Mentored junior front end engineers to get them up to speed with internal coding practices, more productive, and progress their careers",
        "Co-founded and led working group tasked with stabilizing, documenting, and standardizing a front end tech stack",
      ),
    )

    #entry(
      "Datu Health",
      role: "UX engineer",
      dates: "November 2013 – October 2015 | Boulder, CO, USA",
      bullets: (
        "Created and iteratively improved interactive prototypes used during product discovery, user research, and implementation to improve communication between developers, designers, clients, and other stakeholders",
        "Created an authenticated web site for publicly viewing and presenting fully coded prototypes to clients, design, development, and leadership",
        "Led the development of a front end library for sharing pixel perfect CSS and modular JavaScript with the development team",
      ),
    )

    #entry(
      "IHS Markit (prev. Markit on Demand)",
      role: "Interface designer",
      dates: "May 2011 – November 2013, Boulder, CO, USA",
      bullets: (
        "Worked with large international financial and energy companies to design financial portfolios, social communities, games, and trading platforms",
        "Created designs that were localized and designed to work in at least three different languages",
        "Dedicated spare time to lead a group of other designers interested in creating and exploring dynamic data visualizations from live and historical data",
      ),
    )

    #section-title[Education]

    #entry(
      "Rocky Mountain College of Art + Design",
      dates: "August 2008 – August 2011",
      bullets: ("Bachelor of Fine Arts, Communications Design, Summa Cum Laude",),
    )
  ],

  // ===== SIDEBAR COLUMN =====
  layout(size => {
    block(fill: dots, inset: 4mm, width: 100%, height: size.height * 200% - 1.38cm)[
      #set text(size: 8.5pt)
      #block(below: 2em)[
        #text(weight: "bold", size: 10pt)[mike\@mike-engel.com] \
        #v(0.75em, weak: true)
        Zürich, Switzerland \
        American \
        #link("https://mike-engel.com/cv")[English] (Native), #link("https://mike-engel.com/de/cv")[German] (B2) \
        #link("https://mike-engel.com")[mike-engel.com] \
        #link("https://github.com/mike-engel")[github.com/mike-engel] \
        #link("https://www.linkedin.com/in/vegemike")[linkedin.com/in/vegemike]
      ]

      #section-title[Skills]

      #skill-cat("Front end", "HTML/Semantic markup, CSS, JavaScript, Typescript, Web Assembly, React, Vue, Ember, Accessibility, GraphQL, Performance, Animation, Functional programming, Webpack, and Vite")
      #skill-cat("Back end", "Node.js, Rust, Swift, Golang, GraphQL, API design, REST, Schema design, SQL (PostgreSQL, MySQL), NoSQL (RethinkDB, MongoDB), Distributed systems, and queuing")
      #skill-cat("Design", "Information Architecture, UX design, User research, Typography & typesetting, Prototyping, and UI design")
      #skill-cat("Leadership", "Technical guidance, Mentoring, Inter-team collaboration, Workload management, Career growth, and Work-life balance")
      #skill-cat("Miscellaneous", "AI, LLMs, Git, Jujutsu, Unit & Integration testing, Kubernetes, Functional programming, Docker, Pair programming, CI/CD, Automation, Agile, XP, and Authentication & Authorization")
      #skill-cat("Interested in", "Elixir/Erlang, Gleam, Embedded systems, Defensive programming, Operations, Cyptography, and Engineering management")
      #skill-cat("Hobbies", "Weightlifting, Photography, 3D Printing, Watchmaking, Piloting")
    ]
  })
)
