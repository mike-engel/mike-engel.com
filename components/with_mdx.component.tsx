import { ReactNode } from "react";
import styled from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import { Text, Span, Link, Heading } from "styled-typography";
import { MetaTags } from "./meta_tags.component";
import { Breakpoints } from "../utils/spacing.util";
import { Pixelytics } from "./pixelytics.component";

const Article = styled("article")`
	[aria-level="1"] {
		margin-top: 1.5em;
	}

	[aria-level="2"],
	[aria-level="3"],
	[aria-level="4"] {
		margin-top: 0.7em;
		padding-top: 0.5em;
	}

	@media (min-width: ${Breakpoints.Medium}px) {
		[aria-level="2"],
		[aria-level="3"],
		[aria-level="4"] {
			margin-top: 1em;
		}
	}
`;

const components = {
	p: (props: any) => <Text level={3} {...props} />,
	span: (props: any) => <Span {...props} />,
	a: ({ href, ...rest }: any) => <Link {...rest} />,
	h1: (props: any) => <Heading {...props} />,
	h2: (props: any) => <Heading level={2} {...props} />,
	h3: (props: any) => <Heading level={3} {...props} />,
	h4: (props: any) => <Heading level={4} {...props} />,
	h5: (props: any) => <Heading level={5} {...props} />,
	h6: (props: any) => <Heading level={6} {...props} />
};

export const withMdx = (options: Record<string, any>) => ({
	children
}: {
	children: ReactNode;
}) => (
	<Article className="site-constraint">
		<Pixelytics
			page={`/writing/${options.title.replace(/ /gi, "-").toLowerCase()}`}
		/>
		<MetaTags title={options.title} description={options.description} />
		<MDXProvider components={components}>{children}</MDXProvider>
	</Article>
);
