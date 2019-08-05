import React from "react";
import styled from "styled-components";
import NextLink from "next/link";
import { Heading, Link } from "styled-typography";
import { Stylable } from "../types/component.types";
import { PhotoProps } from "../types/photo.types";
import { black } from "./colors";
import { Breakpoints } from "../utils/spacing.util";

type Props = Stylable & {
	year: string;
	photos: PhotoProps[];
};

const thumbnail = (fileName: string) =>
	`https://res.cloudinary.com/beardfury/image/upload/c_fill,dpr_2.0,fl_force_strip.progressive,g_faces,h_160,q_auto:good,w_200/v1444865801/${fileName}`;

export const RawPhotoYear = ({ className, year, photos }: Props) => (
	<div className={className}>
		<Heading level={2}>{year}</Heading>
		<div className="gallery">
			{photos.map(photo => (
				<NextLink key={photo.name} href={`/photography/${photo.name}`} passHref>
					<Link>
						<img src={thumbnail(photo.url)} alt={photo.description} />
					</Link>
				</NextLink>
			))}
		</div>
	</div>
);

export const PhotoYear = styled(RawPhotoYear)`
	& + & {
		margin-top: 4em;
	}

	${Heading} {
		border-top: 2px solid ${black};
		padding: 0.25em 0;
		margin: 0 0 0.5em 0;
		width: 100%;
		max-width: unset;
	}

	.gallery {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-row-gap: 0.5em;
		grid-column-gap: 0.5em;

		@media (min-width: ${Breakpoints.Medium}px) {
			grid-template-columns: 1fr 1fr 1fr;
		}

		@media (min-width: ${Breakpoints.Large}px) {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}

		@media (min-width: ${Breakpoints.XLarge}px) {
			grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		}
	}

	${Link} {
		border: none;
		padding: 0;
	}

	img {
		display: block;
		width: 100%;
	}
`;
