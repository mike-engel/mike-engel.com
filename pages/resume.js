import { black, remType } from "../constants/css";
import Layout from "../components/layout";
import React from "react";

const Resume = () => (
  <Layout>
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
            <g strokeWidth="2" strokeLinecap="square">
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
        I&rsquo;m a designer &amp; developer creating pleasant, user driven experiences.
      </h1>
      <h2 className="h3" id="experience">
        Experience
      </h2>
      <ul className="resume-experience">
        <li>
          <h3 className="h4">Unself</h3>
          <p className="text-small">Senior Developer / Engineering Manager</p>
          <p className="text-small">July 2017 &ndash; Current</p>
          <p>
            Co-led a small team of full-stack developers to create a mobile-first web app. Helped
            promote functional programming, simpler testing, type-safety, and several technologies
            amongst the team. About a year in I began taking on more of an Engineering Manager role
            to help organize and improve the team.
          </p>
        </li>
        <li>
          <h3 className="h4">Welltok</h3>
          <p className="text-small">Lead software engineer / Team lead</p>
          <p className="text-small">November 2015 &ndash; July 2017</p>
          <p>
            Led a team of 8 developers responsible for creating a lightweight, functional node
            service in addition to maintaining an old Rails app. Led initiatives for better
            documentation and testing. Co-founded the front end working group in an effort to
            stabilize, document, and standardize the front end tech stack.
          </p>
        </li>
        <li>
          <h3 className="h4">Datu Health</h3>
          <p className="text-small">UX Engineer</p>
          <p className="text-small">November 2013 &ndash; October 2015</p>
          <p>
            Worked with the design and development teams to iteratively create interactive
            prototypes to assist in product discovery and implementation. Co-created a front end
            library for sharing CSS and JavaScript with the development team. Created an
            authenticated prototype site for publicly viewing and presenting interactive prototypes
            to clients as well as design, development, and leadership.
          </p>
        </li>
        <li>
          <h3 className="h4">Markit on Demand</h3>
          <p className="text-small">Interface designer</p>
          <p className="text-small">May 2011 &ndash; November 2013</p>
          <p>
            I worked with international financial and energy companies to design social communities,
            games, trading platforms, and more.
          </p>
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
      <h2 className="h3" id="skills">
        Skills
      </h2>
      <h3 className="h4" id="skills-proficient">
        Proficient
      </h3>
      <p>
        HTML, CSS, JavaScript, Rust, Node.js, Express.js, React, Redux, Less, Sass, Git, Information
        Achitecture, User experience design, the Adobe Creative Suite (Photoshop, Illustrator,
        Indesign), Sketch 3, Swift, Docker, GraphQL, SQL (PostgreSQL, MySQL), NoSQL (RethinkDB,
        MongoDB), Webpack, and Functional programming.
      </p>
      <h3 className="h4" id="skills-learning">
        Learning
      </h3>
      <p>Kubernetes, Web Assembly, and Progressive Web Apps.</p>
      <style jsx global>
        {`
          #__next > div > header {
            display: none;
          }
        `}
      </style>
      <style jsx>
        {`
          .h4 {
            margin-bottom: 0.25em;
          }

          .back-button {
            display: block;
            margin: 1em 0;
          }

          .back-button > * {
            display: inline-block;
            line-height: 1;
            vertical-align: middle;
          }

          .back-button svg {
            margin-right: 0.6em;
            stroke: ${black};
          }

          .logo,
          .resume-meta {
            display: inline-block;
            vertical-align: middle;
          }

          .logo {
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
            margin: 1em 0 0.5em 0;
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

          @media print {
            html,
            body {
              font-size: 16px;
            }

            .site-constraint {
              width: 670px;
            }

            .site-footer {
              display: none;
            }

            .back-button {
              display: none;
            }

            .h3 {
              font-size: 1.25rem;
            }

            .h4 {
              font-size: 1rem;
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
              height: 35px;
              margin-right: 1em;
            }

            .resume-meta li:first-child {
              font-weight: bold;
              font-size: 1rem;
            }

            .resume-summary {
              margin-top: 0.75em;
            }

            .resume-summary ~ .h3 {
              margin-top: 0.75em;
              margin-bottom: 0.25em;
            }

            .resume-experience li + li,
            .resume-education li + li {
              margin-top: 1em;
            }
          }
        `}
      </style>
    </section>
  </Layout>
);

Resume.displayName = "Resume";

export default Resume;
