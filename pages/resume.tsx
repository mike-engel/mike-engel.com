import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link, Heading, Text } from "styled-typography";
import { black, grey } from "../components/colors";
import { Stylable } from "../types/component.types";
import { MetaTags } from "../components/meta_tags.component";

const GlobalResumeStyles = createGlobalStyle`
  @media print {
    #__next > header {
      display: none;
    }

    html,
    body {
      font-size: 10pt;
    }

    body {
      line-height: 1.3;
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

    [aria-level="2"],
    [aria-level="3"] {
      padding: 0 !important;
    }

    [aria-level="2"] {
      font-size: 1.25rem;
    }

    [aria-level="3"] {
      font-size: 1rem;
      margin-top: .25em !important;
    }

    ${Text} {
      line-height: 1.4;
    }

    ${Text} + ${Text} {
      margin: 1em 0;
    }

    ${Link} {
      border: none;
    }

    [aria-level="2"] > * {
      margin-bottom: 1em;
    }

    [aria-level="2"] + [aria-level="3"] {
      margin-top: 0;
    }

    [aria-level="3"] + ${Text} {
      margin-bottom: .75em;
    }

    li, ${Text}, .resume-summary {
      max-width: unset !important;
      line-height: 1.3 !important;
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
      margin-top: 1.5em !important;
      margin-bottom: 0 !important;
    }

    .resume-summary ~ [aria-level="2"] {
      margin-top: 1.75em !important;
      margin-bottom: 0.5em !important;
    }

    .resume-experience li + li,
    .resume-education li + li {
      margin-top: 1.25em !important;
    }

    ul:not(.plain-list) {
      margin: 0.5em 0 0 1em !important;

      li + li {
        margin-top: .25em !important;
      }
    }

    .hide-from-print {
      display: none;
    }

    .hide-from-screen {
      display: initial;
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
				<ul className="plain-list resume-meta">
					<li>Mike Engel</li>
					<li>mike@mike-engel.com</li>
					<li>United States</li>
					<li>English (Native), German (A2)</li>
					<li className="hide-from-screen">
						<Link href="https://mike-engel.com">mike-engel.com</Link>
					</li>
					<li>
						<Link href="https://github.com/mike-engel">
							github.com/mike-engel
						</Link>
					</li>
				</ul>
			</header>
			<Heading displayLevel={3} className="resume-summary">
				Developer and designer with over 7 years of experience designing,
				developing, and shipping websites and web apps to production. Passionate
				and focused on creating experiences informed by user research and
				feedback which work for everyone regardless of ability or device.
				Successfully leading teams to create new products and update existing
				ones in collaboration with design, operations, project management, and
				other stakeholders.
			</Heading>
			<Heading level={2} id="experience">
				Experience
			</Heading>
			<ul className="plain-list resume-experience">
				<li>
					<Heading level={3}>Consulting / Self development</Heading>
					<Text level={5} color={grey}>
						Current | Boulder, CO, USA
					</Text>
					<ul>
						<li>
							Designing, architecting, and developing a financial web app which
							gives users a better view into their cash flow across multiple
							accounts. More information available upon request.
						</li>
						<li>
							Worked with several clients to plan and execute on changing
							customer priorities and site redesigns.
						</li>
						<li>
							Creating and maintaining open source projects (
							<Link
								href="https://github.com/mike-engel/styled-typography"
								target="_blank"
								rel="noopener noreferrer"
							>
								styled-typography
							</Link>
							,{" "}
							<Link
								href="https://github.com/mike-engel/a11y-css-reset"
								target="_blank"
								rel="noopener noreferrer"
							>
								a11y-css-reset
							</Link>
							,{" "}
							<Link
								href="https://github.com/mike-engel/now-importer"
								target="_blank"
								rel="noopener noreferrer"
							>
								now-importer
							</Link>
							,{" "}
							<Link
								href="https://github.com/mike-engel/gistcard"
								target="_blank"
								rel="noopener noreferrer"
							>
								gistcard
							</Link>
							,{" "}
							<Link
								href="https://github.com/mike-engel/jwt-cli"
								target="_blank"
								rel="noopener noreferrer"
							>
								jwt-cli
							</Link>
							), and managing new issues and PRs
						</li>
						<li>
							Experimenting with new languages and technologies to evaluate the
							problems they solve and continue learning new concepts and ideas
						</li>
					</ul>
				</li>
				<li>
					<Heading level={3}>Unself</Heading>
					<Text level={5}>Senior developer / Acting engineering manager</Text>
					<Text level={5} color={grey}>
						July 2017 &ndash; December 2018 | Boulder, CO, USA
					</Text>
					<ul>
						<li>
							Took on the role of Engineering Manager to better manage
							individual team members and the entire team’s interaction with the
							rest of the company
						</li>
						<li>
							Led a small team of 5 full-stack developers creating a{" "}
							<Link
								href="https://unself.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								mobile-first web app
							</Link>{" "}
							for volunteers to track their hours and organizations to track who
							volunteers and how much to receive grants and other support
						</li>
						<li>
							Spearheaded an app-wide visual redesign, collaborating closely
							with design, product management
						</li>
						<li>
							Successfully gathered consensus and mentored the team on
							functional programming, better testing practices (simplifying
							tests, removing redundant tests, etc), type safety, and several
							technologies to improve quality of life
						</li>
					</ul>
				</li>
				<li>
					<Heading level={3}>Welltok</Heading>
					<Text level={5}>Lead software engineer / Team lead</Text>
					<Text level={5} color={grey}>
						November 2015 &ndash; July 2017 | Denver, CO, USA
					</Text>
					<ul>
						<li>
							Led a team of 8 developers responsible for creating a new
							lightweight, node.js service with functional programming in mind
						</li>
						<li>
							Mentored junior front end engineers to get them up to speed, more
							productive, and progress their careers
						</li>
						<li>
							Co-founded the front end working group in an effort to stabilize,
							document, and standardize a front end tech stack that was
							outdated, complicated, and hard to develop with
						</li>
						<li>
							Worked with other senior front end engineers to research and
							implement better documentation, testing practices, and tooling
						</li>
					</ul>
				</li>
				<li>
					<Heading level={3}>Datu Health</Heading>
					<Text level={5}>UX engineer</Text>
					<Text level={5} color={grey}>
						November 2013 &ndash; October 2015 | Boulder, CO, USA
					</Text>
					<ul>
						<li>
							Created and iteratively improved interactive prototypes used
							during product discovery, user research, and implementation to
							improve communication between developers, designers, clients, and
							other stakeholders
						</li>
						<li>
							Created an authenticated web site for publicly viewing and
							presenting fully coded prototypes to clients, design, development,
							and leadership
						</li>
						<li>
							Led the development of a front end library for sharing pixel
							perfect CSS and modular JavaScript with the development team
						</li>
					</ul>
				</li>
				<li>
					<Heading level={3}>IHS Markit (prev. Markit on Demand)</Heading>
					<Text level={5}>Interface designer</Text>
					<Text level={5} color={grey}>
						May 2011 &ndash; November 2013, Boulder, CO, USA
					</Text>
					<ul>
						<li>
							Worked with large international financial and energy companies to
							design financial portfolios, social communities, games, and
							trading platforms
						</li>
						<li>
							Created designs that were localized and designed to work in at
							least three different languages
						</li>
						<li>
							Dedicated spare time to lead a group of other designers interested
							in creating and exploring dynamic data visualizations from live
							and historical data
						</li>
					</ul>
				</li>
			</ul>
			<Heading level={2} id="skills">
				Skills
			</Heading>
			<Heading level={3}>Front end</Heading>
			<Text>
				HTML & Semantic markup, CSS, JavaScript, Typescript, CSS-in-JS, React,
				Accessibility, Redux, GraphQL, Progressive Web Apps, Next.js, Gatsby,
				Flexbox, Grid, Performance, Animation, Functional programming, Vue,
				Less, Sass, Webpack, and Web Assembly
			</Text>
			<Heading level={3}>Back end</Heading>
			<Text>
				Node.js, Express.js, Twelve factor app, Next.js, GraphQL, API design,
				REST, Schema design, Rust, Swift, SQL (PostgreSQL, MySQL), and NoSQL
				(RethinkDB, MongoDB)
			</Text>
			<Heading level={3}>Design</Heading>
			<Text>
				Information Architecture, UX design, User research, Typography &
				typesetting, Prototyping, UI design, Figma, Sketch, Photoshop,
				Illustrator, and Indesign
			</Text>
			<Heading level={3}>Leadership</Heading>
			<Text>
				Technical guidance, Mentoring, One on ones, Inter-team collaboration,
				Workload management, Career growth, and Work-life balance
			</Text>
			<Heading level={3}>Miscellaneous</Heading>
			<Text>
				Git, Unit & Integration testing, Kubernetes, Functional programming,
				Docker, Pair programming, CI/CD, Automation, Agile, XP, and
				Authentication & Authorization
			</Text>
			<Heading level={3}>Interested in</Heading>
			<Text>
				Elixir/Erlang, Distributed systems, Operations, Machine learning,
				Cyptography, Management
			</Text>
			<Heading level={2} id="education">
				Education
			</Heading>
			<ul className="plain-list resume-education">
				<li>
					<Heading level={3}>Rocky Mountain College of Art + Design</Heading>
					<Text level={5} color={grey}>
						August 2008 &ndash; August 2011
					</Text>
					<Text>
						Bachelor of Fine Arts, Communications Design, Summa Cum Laude
					</Text>
				</li>
			</ul>
		</section>
	</div>
);

export default styled(Resume)`
	ul:not(.plain-list) {
		list-style: disc;
	}

	[aria-level="3"] {
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

	.resume-meta {
		margin: 0;

		li {
			font-size: 0.777778rem;
			line-height: 1.4;
		}
	}

	.resume-summary {
		margin: 2em 0 0.5em 0;
		font-weight: 400;
		max-width: 40em;
		line-height: 1.4;
	}

	.resume-summary ~ [aria-level="2"] {
		margin: 1em 0 0.5em 0;
	}

	.resume-experience li + li,
	.resume-education li + li {
		margin-top: 2em;
	}

	.resume-experience [aria-level="3"],
	.resume-education [aria-level="3"] {
		margin: 0 0 0.2em 0;
	}

	.resume-experience ${Text}, .resume-education ${Text} {
		margin: 0;
	}

	.links {
		margin-top: 1em;
	}

	[aria-level="3"] + ${Text} {
		margin-top: 0;
	}

	.hide-from-screen {
		display: none;

		@media (print) {
			display: initial;
		}
	}
`;
