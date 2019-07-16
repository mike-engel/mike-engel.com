import React from "react";
import { NextPageContext } from "next";
import Link from "next/link";

type Props = { statusCode: number };

export const ErrorPage = ({ statusCode }: Props) => {
	return (
		<div>
			<h1>
				{statusCode
					? "However you got here, there’s nothing here."
					: "Something horrible has gone wrong. You may want to"}
			</h1>
			<p>
				You may want to{" "}
				<Link href="javascript:window.history.back();">
					<a href="">go back</a>
				</Link>{" "}
				or{" "}
				<Link href="/">
					<a>start over</a>
				</Link>
				.
			</p>
		</div>
	);
};

ErrorPage.getInitialProps = async ({ res }: NextPageContext) => {
	const statusCode = res ? res.statusCode : null;

	return { statusCode };
};

export default ErrorPage;
