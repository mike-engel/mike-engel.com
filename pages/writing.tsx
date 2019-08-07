import React, { Fragment } from "react";
import NextLink from "next/link";
import styled from "styled-components";
import writings from "../constants/writing.json";
import { MetaTags } from "../components/meta_tags.component";
import { Stylable } from "../types/component.types";
import { Heading, Link, Text } from "styled-typography";
import { Pixelytics } from "../components/pixelytics.component";

const Writing = ({ className }: Stylable) => (
	<div className={className}>
		<Pixelytics page="/writing" />
		<MetaTags
			title="Writing / Mike Engel"
			description="Mike Engel’s personal blog"
		/>
		<Heading level={1}>Writing</Heading>
		{writings.map(({ title, summary }, idx) => {
			return (
				<Fragment key={idx}>
					<Heading level={2}>
						<NextLink
							href={`/writing/${title.toLowerCase().replace(/ /g, "-")}`}
							prefetch
							passHref
						>
							<Link>{title}</Link>
						</NextLink>
					</Heading>
					<Text level={3}>{summary}</Text>
				</Fragment>
			);
		})}
	</div>
);

export default styled(Writing)`
	[aria-level="1"] {
		margin-bottom: 0.75em;
	}

	${Text} {
		margin: 0.5em 0 2em 0;
	}

	div + div [aria-level="2"] {
		margin-top: 1em;
	}
`;
