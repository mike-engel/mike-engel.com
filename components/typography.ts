import { TypographyProps, FontWeight } from "styled-typography";
import { black, white } from "./colors";

export const typographyTheme: { typography: Partial<TypographyProps> } = {
	typography: {
		fontSizes: [
			"2.05555rem",
			"1.55555rem",
			"1.16666rem",
			"1rem",
			".875rem",
			"12px"
		],
		bodyColor: black,
		headingColor: black,
		headingWeight: FontWeight.Bold,
		bodyLineHeight: 1.6,
		extra: {
			heading: `max-width: 25em;`,
			body: `max-width: 40em;`,
			link: `
				line-height: 1.4;
				text-decoration: none;
				border-bottom: 2px solid ${black};
				transition: color 250ms, background-color 250ms;

				@media(hover) {
					&:hover {
						color: ${white};
						background-color: ${black};
					}
				}
			`
		}
	}
};
