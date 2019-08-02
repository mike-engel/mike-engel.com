import React from "react";
import styled from "styled-components";
import { Link, Span } from "styled-typography";
import { grey } from "./colors";
import { Stylable } from "../types/component.types";

const Footer = ({ className }: Stylable) => (
	<footer className={`${className} site-constraint`}>
		<Span level={6} color={grey}>
			&copy; {new Date().getFullYear()} Mike Engel
		</Span>
		<Link
			level={6}
			rel="noreferrer"
			href="https://twitter.com/beardfury"
			target="_blank"
		>
			Twitter
		</Link>
		<Link
			level={6}
			rel="noreferrer"
			href="https://github.com/mike-engel"
			target="_blank"
		>
			GitHub
		</Link>
		<Link
			level={6}
			rel="noreferrer"
			href="https://www.linkedin.com/in/beardfury"
			target="_blank"
		>
			LinkedIn
		</Link>
	</footer>
);

export default styled(Footer)`
	padding: 2em 0 1em 0;

	${Link} {
		margin-left: 1em;
	}
`;
