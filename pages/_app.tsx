import React from "react";
import App, { Container, AppContext } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { GlobalTypeStyles, FontWeight } from "styled-typography";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { Breakpoints } from "../utils/spacing.util";
import { typographyTheme } from "../components/typography";

const GlobalStyles = createGlobalStyle`
  .site-constraint {
    width: 90vw;
    margin: 0 auto;
  }

  ul {
    margin: 1em 0 0 1em;
    padding-left: initial;

		li + li {
			margin-top: 0.5em;
		}
  }

  li {
    max-width: 40em;
  }

  dt,
  dd {
    margin-left: 0;
    padding-left: 0;
  }

  dd + dt { margin-top: 1em; }

  dt { font-weight: ${FontWeight.Bold}; }

  pre {
    padding: 3px;
    border-radius: 3px;
    background-color: #f8f8f8;
    padding: .5em 1em;
    overflow-x: scroll;
  }

  @media (min-width: ${Breakpoints.Small}px) {
    .site-constraint {
      width: calc(${Breakpoints.Small}px - 7vw);
    }
  }

  @media (min-width: ${Breakpoints.Medium}px) {
    .site-constraint {
      width: calc(${Breakpoints.Medium}px - 7vw);
    }
  }

  @media (min-width: ${Breakpoints.Large}px) {
    html {
      font-size: 1.125rem;
    }

    .site-constraint {
      width: calc(${Breakpoints.Large}px - 7vw);
    }
  }

  @media (min-width: ${Breakpoints.XLarge}px) {
    .site-constraint {
      width: calc(${Breakpoints.XLarge}px - 7vw);
    }
  }
`;

export class PortfolioApp extends App {
	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<ThemeProvider theme={typographyTheme}>
					<>
						<GlobalStyles />
						<GlobalTypeStyles />
						<Nav />
						<main>
							<Component className="site-constraint" {...pageProps} />
						</main>
						<Footer />
					</>
				</ThemeProvider>
			</Container>
		);
	}
}

export default PortfolioApp;
