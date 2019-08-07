import React from "react";
import styled from "styled-components";
import { Heading } from "styled-typography";
import ContactForm from "../components/contact-form";
import Projects from "../components/projects";
import { Stylable } from "../types/component.types";
import { MetaTags } from "../components/meta_tags.component";
import { Breakpoints } from "../utils/spacing.util";
import { Pixelytics } from "../components/pixelytics.component";

const Index = ({ className }: Stylable) => (
	<div className={className}>
		<Pixelytics page="/" />
		<MetaTags />
		<Heading>
			I’m a designer & developer leading teams and creating user-driven
			experiences that work for everyone on all devices.
		</Heading>
		<Heading level={2} id="projects">
			Recent projects
		</Heading>
		<Projects />
		<Heading level={2} id="contact">
			Contact
		</Heading>
		<ContactForm />
	</div>
);

export default styled(Index)`
	[aria-level="1"],
	[aria-level="2"] {
		padding-top: 0.5em;
	}

	[aria-level="1"] {
		margin: 0.5em 0;
	}

	[aria-level="2"] {
		margin-top: 1.5em;
	}

	@media (min-width: ${Breakpoints.Medium}px) {
		[aria-level="1"] {
			margin: 1em 0;
		}

		[aria-level="2"] {
			margin-top: 3em;
		}
	}
`;
