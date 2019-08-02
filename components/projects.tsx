import React from "react";
import styled from "styled-components";
import { Text, Heading } from "styled-typography";
import Project from "./project";
import { Stylable } from "../types/component.types";
import { Breakpoints } from "../utils/spacing.util";

const projects = [
	{
		description: " Typograpy components for react and styled-components",
		name: "Styled Typgography",
		url: "https://github.com/mike-engel/styled-typgography"
	},
	{
		description:
			"A super fast CLI tool to decode and encode JWTs built in Rust.",
		name: "JWT cli",
		url: "https://github.com/mike-engel/jwt-cli"
	},
	{
		description:
			"Show better gist previews in twitter with a code snippet and a link to the gist",
		name: "GistCard",
		url: "https://github.com/mike-engel/gistcard"
	},
	{
		description:
			"A small set of global rules to make things accessible and reset default styling",
		name: "A11y CSS Reset",
		url: "https://github.com/mike-engel/a11y-css-reset"
	},
	{
		description: "A polyfill to understand your users’ preferred languages",
		name: "Locale",
		url: "https://locale.now.sh"
	},
	{
		description:
			"Minimal input that uses the floating label pattern for React.",
		name: "floating-label-react",
		url: "https://github.com/mike-engel/floating-label-react"
	}
];

const Projects = ({ className }: Stylable) => (
	<ul className={`plain-list ${className}`}>
		{projects.map(({ description, name, url }, idx) => (
			<Project description={description} key={idx} name={name} url={url} />
		))}
	</ul>
);

export default styled(Projects)`
	${Heading},
	${Text} {
		margin: 0;
		padding: 0;
	}

	${Text} {
		margin-top: 0.5em;
	}

	${Text} + ${Heading} {
		margin-top: 1em;
	}

	li {
		display: inline-block;
		width: 100%;
		margin-bottom: 1.5em;
		vertical-align: top;
	}

	@media (min-width: ${Breakpoints.Medium}px) {
		li {
			margin-right: 2em;
			width: calc(50% - 2em);
		}

		li:nth-child(2n) {
			margin-right: 0;
		}
	}

	@media (min-width: ${Breakpoints.Large}px) {
		li {
			margin-right: 2em;
			width: calc(33.3333333333% - 2em);
		}

		li:nth-child(2n) {
			margin-right: 2em;
		}

		li:nth-child(3n) {
			margin-right: 0;
		}
	}
`;
