import React from "react";
import { Link, Heading, Text } from "styled-typography";

type Props = { description: string; name: string; url: string };

const Project = ({ description, name, url }: Props) => (
	<li>
		<Heading level={3} displayLevel={4}>
			<Link href={url}>{name}</Link>
		</Heading>
		<Text>{description}</Text>
	</li>
);

export default Project;
