import React from "react";

const Resume = () =>
  <section>
    <header className="resume-header">
      <a href="/" className="back-button hidden-link">
        <svg
          width="33px"
          height="25px"
          viewBox="0 0 33 25"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g stroke-width="2" stroke-linecap="square">
            <path d="M2,12.6066017 L12.6066017,2" />
            <path d="M2,12.6066017 L12.6066017,23.2132034" />
            <path d="M3,12.6066017 L32,12.6066017" />
          </g>
        </svg>
        <span>back</span>
      </a>
      <svg
        className="logo"
        width="46px"
        height="50px"
        viewBox="0 0 46 50"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path d="M0,9.26966292 L0,50 L12,44.9438202 L12,0 L0,9.26966292 Z M46,9.26966292 L46,50 L34,44.9438202 L34,0 L46,9.26966292 Z M12,0 L12,19.1964286 L23,33.59375 L23,14.9619223 L12,0 Z M34,0 L34,19.1964286 L23,33.59375 L23,14.9619223 L34,0 Z" />
      </svg>
      <ul className="resume-meta">
        <li>Mike Engel</li>
        <li>mike@mike-engel.com</li>
      </ul>
    </header>
    <h1 className="h3 resume-summary">
      I&rsquo;m a designer &amp; developer creating pleasant, user driven
      experiences.
    </h1>
    <h2 className="h3" id="experience">Experience</h2>
    <ul className="resume-experience">
      <li>
        <h3 className="h4">Welltok</h3>
        <p className="text-small">Lead software engineer / Team lead</p>
        <p className="text-small">November 2015 &ndash; Current</p>
        <p>
          Led a team of 8 developers responsible for creating a lightweight,
          functional node service in addition to maintaining an old Rails app.
          Led initiatives for better documentation and testing. Co-founded the
          front end working group in an effort to stabilize, document, and
          standardize the front end tech stack.
        </p>
      </li>
      <li>
        <h3 className="h4">Datu Health</h3>
        <p className="text-small">UX Engineer</p>
        <p className="text-small">November 2013 &ndash; October 2015</p>
        <p>
          Worked with the design and development teams to iteratively create
          interactive prototypes to assist in product discovery and
          implementation. Co-created a front end library for sharing CSS and
          JavaScript with the development team. Created an authenticated
          prototype site for publicly viewing and presenting interactive
          prototypes to clients as well as design, development, and leadership.
        </p>
      </li>
      <li>
        <h3 className="h4">Markit on Demand</h3>
        <p className="text-small">Interface designer</p>
        <p className="text-small">May 2011 &ndash; November 2013</p>
        <p>
          I worked with international financial and energy companies to design
          social communities, games, trading platforms, and more.
        </p>
      </li>
    </ul>
    <h2 className="h3" id="education">Education</h2>
    <ul className="resume-education">
      <li>
        <h3 className="h4">Rocky Mountain College of Art &plus; Design</h3>
        <p className="text-small">August 2008 &ndash; August 2011</p>
        <p>Bachelor of Fine Arts, Communications Design</p>
      </li>
    </ul>
    <h2 className="h3" id="skills">Skills</h2>
    <h3 className="h4" id="skills-proficient">Proficient</h3>
    <p>
      HTML, CSS, JavaScript, Node.js, Express.js, React, Redux, Less, Sass, Git,
      Information Achitecture, User experience design, the Adobe Creative Suite
      (Photoshop, Illustrator, Indesign), and Sketch 3, Swift, Docker, Ruby on
      Rails, Ruby, GraphQL, SQL (PostgreSQL, MySQL), NoSQL (RethinkDB, MongoDB),
      and Webpack.
    </p>
    <h3 className="h4" id="skills-learning">Learning</h3>
    <p>Elm, Functional programming, and Rust.</p>
  </section>;

Resume.displayName = "Resume";

export default Resume;
