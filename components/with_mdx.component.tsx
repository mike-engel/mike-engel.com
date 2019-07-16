import { ReactNode } from "react";
import styled from "styled-components";
import { remType, bpMedium } from "../constants/css";
import { MetaTags } from "./meta_tags.component";

const Article = styled("article")`
	h2,
	h3,
	h4 {
		margin-top: 0.7em;
		padding-top: 0.5em;
	}

	p {
		${remType(21)};
		line-height: 1.6;
	}

	@media (min-width: ${bpMedium}) {
		h2,
		h3,
		h4 {
			margin-top: 1em;
		}
	}
`;

export const withMdx = (options: Record<string, any>) => ({
	children
}: {
	children: ReactNode;
}) => (
	<Article className="site-constraint">
		<MetaTags title={options.title} description={options.description} />
		{children}
	</Article>
);
