import React from "react";
import NextLink from "next/link";
import styled from "styled-components";
import { Link, FontWeight } from "styled-typography";
import { black } from "./colors";
import { Stylable } from "../types/component.types";
import { Breakpoints } from "../utils/spacing.util";

const Nav = ({ className }: Stylable) => (
	<header className={className}>
		<nav className="site-constraint">
			<NextLink passHref href="/" prefetch>
				<Link
					className="hidden-link"
					title="logo – click to go to the home page"
				>
					<svg
						width="46px"
						height="50px"
						viewBox="0 0 46 50"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
					>
						<path d="M0,9.26966292 L0,50 L12,44.9438202 L12,0 L0,9.26966292 Z M46,9.26966292 L46,50 L34,44.9438202 L34,0 L46,9.26966292 Z M12,0 L12,19.1964286 L23,33.59375 L23,14.9619223 L12,0 Z M34,0 L34,19.1964286 L23,33.59375 L23,14.9619223 L34,0 Z" />
					</svg>
				</Link>
			</NextLink>
			<ul className="plain-list">
				<li>
					<NextLink passHref href="/">
						<Link fontWeight={FontWeight.SemiBold}>projects</Link>
					</NextLink>
				</li>
				<li>
					<NextLink passHref href="/#contact">
						<Link fontWeight={FontWeight.SemiBold}>contact</Link>
					</NextLink>
				</li>
				<li>
					<NextLink passHref href="/photography" prefetch>
						<Link fontWeight={FontWeight.SemiBold}>photography</Link>
					</NextLink>
				</li>
				<li>
					<NextLink passHref href="/writing" prefetch>
						<Link fontWeight={FontWeight.SemiBold}>writing</Link>
					</NextLink>
				</li>
				<li>
					<NextLink passHref href="/resume" prefetch>
						<Link fontWeight={FontWeight.SemiBold}>resume</Link>
					</NextLink>
				</li>
			</ul>
		</nav>
	</header>
);

export default styled(Nav)`
	nav {
		display: flex;
		flex-direction: column;
		padding: 20px 0;
	}

	.hidden-link {
		border: none;

		@media (hover) {
			&:hover {
				background-color: transparent;
			}
		}
	}

	ul {
		margin: 0.5em 0 0 0;
	}

	li {
		display: inline-block;
		margin-right: 1em;
	}

	svg {
		width: auto;
		height: 50px;
		margin-right: 1.5em;
		fill: ${black};
	}

	@media (min-width: ${Breakpoints.Medium}px) {
		nav {
			flex-direction: row;
			align-items: center;
		}

		li {
			margin-right: 1.5em;
		}

		ul {
			margin: -10px 0 0 0;
		}
	}
`;
