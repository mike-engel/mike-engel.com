import React from "react";
import styled from "styled-components";
import { Heading, Text } from "styled-typography";
import { Stylable } from "../../types/component.types";
import { MetaTags } from "../../components/meta_tags.component";
import photographs from "../../constants/photography.json";
import { PhotoProps } from "../../types/photo.types";
import { PhotoYear } from "../../components/photo_year.component";
import { Pixelytics } from "../../components/pixelytics.component";

const sortedPhotos = (): [string, PhotoProps[]][] => {
	const sorted = photographs.sort((a, b) => {
		const aDate = new Date(a.createdAt);
		const bDate = new Date(b.createdAt);

		return aDate.getTime() - bDate.getTime();
	});
	const grouped = sorted.reduce<{ [key: string]: PhotoProps[] }>(
		(acc, photo) => {
			const date = new Date(photo.createdAt);
			const year = date.getFullYear();

			return {
				...acc,
				[year]: [...(acc[year] || []), photo]
			};
		},
		{}
	);

	return Object.keys(grouped)
		.sort((a, b) => parseInt(b) - parseInt(a))
		.map<[string, PhotoProps[]]>(year => [year, grouped[year]]);
};

const Photography = ({ className }: Stylable) => (
	<div className={className}>
		<Pixelytics page="/photography" />
		<MetaTags
			title="Photography / Mike Engel"
			description="Mike Engel’s personal photography portfolio"
		/>
		<Heading>Photography</Heading>
		<Text>
			These are select moments in time from my travel and every day life. If you
			would like to use a photo please contact me first. Additionally, I'm very
			interested in getting into arranged photo shoots of people or still lifes
			and products. If you're interested, please contact me.
		</Text>
		{sortedPhotos().map(([year, photos]) => (
			<PhotoYear key={year} year={year} photos={photos} />
		))}
	</div>
);

export default styled(Photography)`
	[aria-level="1"] {
		margin-top: 0;
		padding: 0;
		margin-bottom: 0.3em;
	}

	${Heading} + ${Text} {
		margin-bottom: 2em;
	}
`;
