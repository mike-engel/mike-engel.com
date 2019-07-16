import React from "react";
import Head from "next/head";

type Props = {
	title?: string;
	description?: string;
};

export const MetaTags = ({
	title = "Mike Engel",
	description = "Mike Engel is a designer & developer leading teams and creating user-driven experiences that work for everyone on all devices."
}: Props) => (
	<Head>
		<title>{title}</title>
		<meta name="description" content={description} />

		<meta name="name" content={title} />
		<meta name="image" content="" />

		<meta property="og:url" content="https://mike-engel.com" />
		<meta property="og:type" content="website" />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta property="og:image" content="" />

		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content={title} />
		<meta name="twitter:description" content={description} />
		<meta name="twitter:image" content="" />
	</Head>
);
