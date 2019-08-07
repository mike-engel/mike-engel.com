import React from "react";
import styled from "styled-components";
import { Stylable } from "../types/component.types";

type Props = Stylable & {
	page: string;
};

export const RawPixelytics = ({ page, className }: Props) => (
	<img
		className={className}
		src={`https://rough-spectacles.glitch.me/pixel.gif?key=343f7f3a-16ba-4b6b-bb66-f83a6d1bbb6d&page=${page}`}
		aria-hidden
	/>
);

export const Pixelytics = styled(RawPixelytics)`
	position: fixed;
	top: 0;
	right: 0;
	opacity: 0;
	width: 0;
	height: 0;
`;
