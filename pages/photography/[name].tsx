import React from "react";
import styled from "styled-components";
import { Heading, Span } from "styled-typography";
import { NextPageContext } from "next";
import { white, lightGrey } from "../../components/colors";
import { Stylable } from "../../types/component.types";
import { MetaTags } from "../../components/meta_tags.component";
import photographs from "../../constants/photography.json";
import { PhotoProps } from "../../types/photo.types";

type Props = Stylable & { photo: PhotoProps };

const Figure = styled("figure")``;

const urlPrefix = (size: number, fileName: string) =>
	`https://res.cloudinary.com/beardfury/image/upload/fl_progressive,fl_force_strip,q_70,c_scale,w_${size}/v1444865801/${fileName}`;

const getPhoto = (name: string) =>
	photographs.filter(photo => photo.name === name)[0];

const Photo = ({ photo, className }: Props) => {
	const {
		name,
		description,
		url,
		camera,
		focalLength,
		shutterSpeed,
		aperture,
		iso
	} = photo;

	return (
		<section className={className}>
			<MetaTags title={name} description={description} />
			<Figure>
				<img
					src={urlPrefix(1200, url)}
					srcSet={`${urlPrefix(1200, url)} 1200w, ${urlPrefix(
						1024,
						url
					)} 1024w, ${urlPrefix(768, url)} 768w, ${urlPrefix(
						500,
						url
					)} 500w, ${urlPrefix(420, url)} 420w`}
					alt={description}
				/>
				<Heading>{name}</Heading>
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
		</section>
	);
};

Photo.getInitialProps = ({ query }: NextPageContext) => {
	const name = Array.isArray(query.name) ? query.name[0] : query.name;

	return { photo: getPhoto(name) };
};

export default styled(Photo)`
	margin-top: 2em;

	[aria-level="1"] {
		margin-top: 0;
		margin-bottom: 0.3em;
		padding: 0;
	}

	p {
		margin-bottom: 3em;
	}

	${Figure} {
		position: relative;
		margin: 0;

		img {
			display: block;
			width: 100%;
			height: calc(${({ photo }) => photo.heightAt1200} * 100% / 1200);
			margin-bottom: 2em;
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
			content: ". . . . . . . . . . . . . . . . . . . . "
				". . . . . . . . . . . . . . . . . . . . "
				". . . . . . . . . . . . . . . . . . . . "
				". . . . . . . . . . . . . . . . . . . . ";
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
`;
