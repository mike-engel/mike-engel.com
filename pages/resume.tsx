import React from "react";
import { black, remType } from "../constants/css";
import { Stylable } from "../types/component.types";
import styled, { createGlobalStyle } from "styled-components";
import { MetaTags } from "../components/meta_tags.component";

const GlobalResumeStyles = createGlobalStyle`
  @media print {
    #__next > header {
      display: none;
    }

    html,
    body {
      font-size: 11pt;
    }

    .site-constraint {
      width: 670px;
    }

    main + footer {
      display: none !important;
    }

    .back-button {
      display: none !important;
    }

    .h3,
    .h4 {
      padding: 0 !important;
    }

    .h3 {
      font-size: 1.25rem;
    }

    .h4 {
      font-size: 1rem;
      margin-top: .25em !important;
    }

    .text-small + .text-small {
      margin-top: 0.25em;
    }

    p {
      line-height: 1.4;
    }

    p + p {
      margin: 0.75em 0;
    }

    .h3 > * {
      margin-bottom: 0.5em;
    }

    .h3 + .h4 {
      margin-top: 0;
    }

    .logo {
      display: initial !important;
      height: 35px !important;
      margin-right: 1em !important;
    }

    .resume-meta li:first-child {
      font-weight: bold;
      font-size: 1rem;
    }

    .resume-summary {
      margin-top: 0.75em !important;
    }

    .resume-summary ~ .h3 {
      margin-top: 0.75em !important;
      margin-bottom: 0.25em !important;
    }

    .resume-experience li + li,
    .resume-education li + li {
      margin-top: 1em !important;
    }

    .bulleted-list {
      margin: 0.25em 0 0 1em !important;

      li + li {
        margin-top: 0 !important;
      }
    }
  }
`;

const Resume = ({ className }: Stylable) => (
  <div className={className}>
    <GlobalResumeStyles />
    <MetaTags title="Resume / Mike Engel" />
    <section>
      <header className="resume-header">
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
          <li>United States</li>
          <li>English, German (A2)</li>
        </ul>
      </header>
      <h1 className="h4 resume-summary">
        Web developer and designer with over 7 years of experience designing and shipping websites
        and web apps to production. Passionate and focused on creating experiences informed by user
        research and feedback which work for everyone regardless of ability or device. Successfully
        leading teams to create new products and update existing ones in collaboration with design,
        operation, project management, among others.
      </h1>
      <h2 className="h3" id="skills">
        Skills
      </h2>
      <h3 className="h4">Client side</h3>
      <p>
        HTML, CSS, JavaScript, React, Redux, Vue, Next.js, Less, Sass, GraphQL, Webpack, Web
        Assembly, and Progressive Web Apps
      </p>
      <h3 className="h4">Server side</h3>
      <p>
        Node.js, Express.js, Next.js, Rust, Swift, GraphQL, REST, SQL (PostgreSQL, MySQL), and NoSQL
        (RethinkDB, MongoDB)
      </p>
      <h3 className="h4">Design</h3>
      <p>
        Information Architecture, User experience design, User research, Figma, Sketch, Photoshop,
        Illustrator, and Indesign
      </p>
      <h3 className="h4">Leadership</h3>
      <p>
        Technical guidance, Mentoring, One on ones, Inter-team collaboration, Workload management,
        Career growth, and Work-life balance
      </p>
      <h3 className="h4">Miscellaneous</h3>
      <p>
        Git, Docker, Testing (TDD), Pair programming, CI/CD, Automation, Agile, XP, Functional
        programming, Kubernetes, and Authentication &amp; Authorization
      </p>
      <h2 className="h3" id="experience">
        Experience
      </h2>
      <ul className="resume-experience">
        <li>
          <h3 className="h4">Self employed / Self development</h3>
          <p className="text-small">Current</p>
          <ul className="bulleted-list">
            <li>Creating and maintaining open source projects and managing new issues and PRs</li>
            <li>
              Experimenting with new languages and technologies to evaluate the problems they solve
              and continue learning new concepts and ideas
            </li>
            <li>
              Created and actively developing a financial web app which gives users a better view
              into their cash flow across multiple accounts. Responsible for all concepts, design,
              user experience, and development.
            </li>
          </ul>
        </li>
        <li>
          <h3 className="h4">Unself</h3>
          <p className="text-small">Senior Developer / Engineering Manager</p>
          <p className="text-small">July 2017 &ndash; December 2018</p>
          <ul className="bulleted-list">
            <li>Co-led a small team of full-stack developers creating a mobile-first web app</li>
            <li>
              Spearheaded an app-wide visual redesign, collaborating closely with design, product
              management
            </li>
            <li>
              Successfully gathered consensus and mentored the team on functional programming,
              better testing practices (simplifying tests, removing redundant tests, etc), type
              safety, and several technologies to improve quality of life
            </li>
            <li>
              Took on the role of Engineering Manager to better manage individual team members and
              the entire team's interaction with the rest of the company
            </li>
          </ul>
        </li>
        <li>
          <h3 className="h4">Welltok</h3>
          <p className="text-small">Lead software engineer / Team lead</p>
          <p className="text-small">November 2015 &ndash; July 2017</p>
          <ul className="bulleted-list">
            <li>
              Led a team of 8 developers responsible for creating a new lightweight, functional
              node.js service
            </li>
            <li>
              Mentored junior front end engineers to get them up to speed, more productive, and
              progress their careers
            </li>
            <li>
              Worked with other senior front end engineers to research and implement better
              documentation, testing practices, and tooling
            </li>
            <li>
              Co-founded the front end working group in an effort to stabilize, document, and
              standardize a front end tech stack that was outdated, complicated, and hard to develop
              for
            </li>
          </ul>
        </li>
        <li>
          <h3 className="h4">Datu Health</h3>
          <p className="text-small">UX Engineer</p>
          <p className="text-small">November 2013 &ndash; October 2015</p>
          <ul className="bulleted-list">
            <li>
              Worked closely with design, development, and client stakeholders to create and
              iteratively improve interactive prototypes used during product discovery, user
              research, and implementation
            </li>
            <li>
              Created an authenticated web site for publicly viewing and presenting live prototypes
              to clients, design, development, and leadership
            </li>
            <li>
              Led the development of a front end library to sharing pixel perfect CSS and modular
              JavaScript with the development team
            </li>
          </ul>
        </li>
        <li>
          <h3 className="h4">IHS Markit (prev. Markit on Demand)</h3>
          <p className="text-small">Interface designer</p>
          <p className="text-small">May 2011 &ndash; November 2013</p>
          <ul className="bulleted-list">
            <li>
              Worked with large international financial and energy companies to design social
              communities, games, and trading platforms
            </li>
            <li>Created designs that were localized in at least three different languages</li>
            <li>
              Dedicated spare time to lead a group of other designers interested in creating dynamic
              data visualizations from live data
            </li>
          </ul>
        </li>
      </ul>
      <h2 className="h3" id="education">
        Education
      </h2>
      <ul className="resume-education">
        <li>
          <h3 className="h4">Rocky Mountain College of Art + Design</h3>
          <p className="text-small">August 2008 &ndash; August 2011</p>
          <p>Bachelor of Fine Arts, Communications Design</p>
        </li>
      </ul>
      <ul className="links">
        <li>
          <span className="bold">Portfolio:</span>{" "}
          <a href="https://mike-engel.com">https://mike-engel.com</a>
        </li>
        <li>
          <span className="bold">Github:</span>{" "}
          <a href="https://github.com/mike-engel">https://github.com/mike-engel</a>
        </li>
      </ul>
    </section>
  </div>
);

export default styled(Resume)`
  .h4 {
    margin-bottom: 0.25em;
  }

  .logo,
  .resume-meta {
    display: inline-block;
    vertical-align: top;
  }

  .logo {
    display: none;
    width: auto;
    height: 50px;
    margin-right: 1.7em;
    fill: ${black};
  }

  .resume-header {
    padding-top: 1px;
  }

  .resume-meta li {
    ${remType(14)}
  }

  .resume-summary {
    margin: 2em 0 0.5em 0;
    font-weight: 400;
    max-width: 40em;
    line-height: 1.4;
  }

  .resume-summary ~ .h3 {
    margin: 1em 0 0.5em 0;
  }

  .resume-experience li + li,
  .resume-education li + li {
    margin-top: 2em;
  }

  .resume-experience .h4,
  .resume-education .h4 {
    margin: 0 0 0.2em 0;
  }

  .resume-experience p,
  .resume-education p {
    margin: 0;
  }

  .bulleted-list {
    margin: 1em 0 0 1em;
    padding-left: initial;
    list-style-type: disc;

    li + li {
      margin-top: 0.5em;
    }
  }

  .bold {
    font-weight: 600;
  }

  .links {
    margin-top: 1em;
  }
`;
