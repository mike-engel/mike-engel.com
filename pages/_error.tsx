import React from "react";
import { NextPageContext } from "next";
import NextLink from "next/link";
import { Text, Heading, Link } from "styled-typography";

type Props = { statusCode: number };

export const ErrorPage = ({ statusCode }: Props) => {
	return (
		<div className="site-constraint">
			<Heading level={1}>
				{statusCode
					? "However you got here, there’s nothing here."
					: "Something horrible has gone wrong. You may want to"}
			</Heading>
			<Text>
				You may want to{" "}
				<NextLink href="javascript:window.history.back();" passHref>
					<Link href="">go back</Link>
				</NextLink>{" "}
				or{" "}
				<NextLink href="/" passHref>
					<Link>start over</Link>
				</NextLink>
				.
			</Text>
		</div>
	);
};

ErrorPage.getInitialProps = async ({ res }: NextPageContext) => {
	const statusCode = res ? res.statusCode : null;

	return { statusCode };
};

export default ErrorPage;
