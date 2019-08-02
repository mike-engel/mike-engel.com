import React from "react";
import styled from "styled-components";
import { Stylable } from "../types/component.types";
import { MetaTags } from "../components/meta_tags.component";
import { Heading, Text, Link } from "styled-typography";

const Uses = ({ className }: Stylable) => (
	<div className={className}>
		<MetaTags />
		<Heading>What I use</Heading>
		<Text>
			These are the tools and software I use on a (generally) daily basis.
			Inspired by{" "}
			<Link href="https://mobile.twitter.com/sarah_edo/status/1150922659187712000">
				this tweet
			</Link>
			, as well as all these{" "}
			<Link href="https://mobile.twitter.com/sarah_edo/status/1150922659187712000">
				use pages
			</Link>
			.
		</Text>
		<Text>I'm going to try and keep this list as updated as I can!</Text>
		<ul>
			<li>
				I use <Link href="https://code.visualstudio.com/">VS Code</Link> as my
				primary editor. I use my own{" "}
				<Link href="https://github.com/mike-engel/vscode-simple-ocean/">
					custom theme
				</Link>{" "}
				based on base16 ocean. The typeface I use is{" "}
				<Link href="https://input.fontbureau.com">Input Mono</Link>. You can see
				all my VS Code settings at this{" "}
				<Link href="https://gist.github.com/mike-engel/0685e4068ec0120590d84116d0d8d425">
					gist
				</Link>
				, which will always be up to date.
			</li>
			<li>
				For my terminal, I use <Link href="https://iterm2.com/">iTerm</Link> for
				mac. Everywhere else I use <Link href="https://hyper.is/">Hyper</Link>.
			</li>
			<li>
				At my desk, I use a hand-made black walnut top with adjustable legs from{" "}
				<Link href="https://www.autonomous.ai/">autonomous</Link>. I have an{" "}
				<Link href="https://www.amazon.com/gp/product/B07CKXCBWB">
					HP Z27 27"
				</Link>{" "}
				monitor attached to a a super basic and kind of crappy{" "}
				<Link href="https://www.amazon.com/gp/product/B01NH0HTM5">
					monitor stand
				</Link>
				. I'm currently using a custom-built{" "}
				<Link href="https://keeb.io/products/quefrency-60-65-split-staggered-keyboard">
					Quefrency
				</Link>{" "}
				split mechanical keyboard with{" "}
				<Link href="https://keeb.io/products/quefrency-60-65-split-staggered-keyboard">
					Godspeed
				</Link>{" "}
				keycaps. For a mouse, I'm just using a{" "}
				<Link href="https://www.apple.com/shop/product/MJ2R2LL/A/magic-trackpad-2-silver">
					Magic Trackpad
				</Link>{" "}
				from Apple.
			</li>
			<li>
				For photography, I'm shooting with a{" "}
				<Link href="https://www.sony.com/electronics/interchangeable-lens-cameras/ilce-7rm2">
					Sony α7R II
				</Link>{" "}
				with a{" "}
				<Link href="https://www.amazon.com/gp/product/B00NW7B68S">
					Zeiss 50mm ƒ/2
				</Link>{" "}
				lens, which are both amazing.
			</li>
		</ul>
	</div>
);

export default styled(Uses)``;
