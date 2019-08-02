import React from "react";
import styled from "styled-components";
import { SimpleImg } from "react-simple-img";
import { Heading, Span, Text } from "styled-typography";
import { white, lightGrey, black } from "../components/colors";
import { Stylable } from "../types/component.types";
import { MetaTags } from "../components/meta_tags.component";
import photographs from "../constants/photography.json";

type PhotoProps = {
	name: string;
	description: string;
	url: string;
	camera: string;
	focalLength: string;
	shutterSpeed: string;
	aperture: string;
	iso: string;
	heightAt1200: number;
};

const urlPrefix = (size: number, fileName: string) =>
	`https://res.cloudinary.com/beardfury/image/upload/fl_progressive,fl_force_strip,q_70,c_scale,w_${size}/v1444865801/${fileName}`;

const Figure = styled("figure")``;

const Photo = ({
	name,
	description,
	url,
	camera,
	focalLength,
	shutterSpeed,
	aperture,
	iso,
	heightAt1200
}: PhotoProps) => (
	<Figure>
		<SimpleImg
			src={urlPrefix(1200, url)}
			srcSet={`${urlPrefix(1200, url)} 1200w, ${urlPrefix(
				1024,
				url
			)} 1024w, ${urlPrefix(768, url)} 768w, ${urlPrefix(
				500,
				url
			)} 500w, ${urlPrefix(420, url)} 420w`}
			alt={description}
			applyAspectRatio
			width={1200}
			height={heightAt1200}
			placeholder={black}
		/>
		<Heading level={2} displayLevel={1}>
			{name}
		</Heading>
		<div className="meta-container">
			<figcaption>{description}</figcaption>
			<ul className="plain-list">
				<li>
					<Span>Camera</Span>
					<Span>{camera}</Span>
				</li>
				<li>
					<Span>Focal length</Span>
					<Span>{focalLength}</Span>
				</li>
				<li>
					<Span>Shutter speed</Span>
					<Span>{shutterSpeed} sec</Span>
				</li>
				<li>
					<Span>Aperture</Span>
					<Span>ƒ{aperture}</Span>
				</li>
				<li>
					<Span>ISO</Span>
					<Span>{iso}</Span>
				</li>
			</ul>
		</div>
	</Figure>
);

const Photography = ({ className }: Stylable) => (
	<div className={className}>
		<MetaTags
			title="Photography / Mike Engel"
			description="Mike Engel’s personal photography portfolio"
		/>
		<Heading>Photography</Heading>
		<Text>
			These are select moments in time from my travel and every day life. If you
			would like to use a photo please contact me first.
		</Text>
		{photographs.map((photo: PhotoProps) => (
			<Photo key={photo.name} {...photo} />
		))}
	</div>
);

export default styled(Photography)`
	[aria-level="1"],
	[aria-level="2"] {
		margin-top: 0;
		padding: 0;
	}

	[aria-level="1"] {
		margin-bottom: 0.3em;
	}

	p {
		margin-bottom: 3em;
	}

	${Figure} {
		margin: 0;

		img {
			display: block;
			width: 100%;
		}

		[aria-level="2"] {
			margin-top: .75em;
			margin-bottom: 0.1em;
		}

		.meta-container {
			display: flex;
			flex-direction: column;
			position: relative;
		}

		figcaption {
			max-width: 40em;
			padding: 0 0 2em 0;
		}

		ul {
			margin: 0;
			overflow: hidden;
			width: 100%;
		}

		ul li {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-direction: row;
			position: relative;
		}

		ul li + li {
			margin-top: 0.75em;
		}

		ul li:after {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 0;
			white-space: nowrap;
			font-weight: 300;
			line-height: 1;
			color: ${lightGrey};
			content: ". . . . . . . . . . . . . . . . . . . . " ". . . . . . . . . . . . . . . . . . . . "
				". . . . . . . . . . . . . . . . . . . . " ". . . . . . . . . . . . . . . . . . . . ";
		}

		span:first-child,
		span:last-child {
			font-size: 0.8125rem;
			background: ${white};
			display: block;
			margin: 0;
			padding: 0;
			line-height: 1;
			position: relative;
			z-index: 100;
		}

		span:first-child {
			padding: 0 0.3em 0 0;
			font-weight: 400;
		}

		span:last-child {
			text-align: right;
			padding: 0 0 0 0.3em;
			font-weight: 600;
		}

		@media (min-width: 767px) {
			figure + figure {
				margin-top: 5em;
			}

			.meta-container {
				flex-direction: row;
			}

			figcaption,
			ul {
				flex: 1 100%;
			}

			figcaption {
				flex: 1 66%;
				padding: 0 1em 0 0;
			}

			ul {
				flex: 1 33%;
			}
		}
	}

	${Figure} + ${Figure} {
		margin-top: 4em;
	}
`;
