import React from "react";
import App, { Container, NextAppContext } from "next/app";
import { createGlobalStyle } from "styled-components";
import { helpers, typography, bpSmall, bpMedium, bpLarge, bpXLarge } from "../constants/css";
import Nav from "../components/nav";
import Footer from "../components/footer";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  ${helpers} ${typography} .site-constraint {
    width: 90vw;
    margin: 0 auto;
  }

  @media (min-width: ${bpSmall}) {
    .site-constraint {
      width: calc(${bpSmall} - 7vw);
    }
  }

  @media (min-width: ${bpMedium}) {
    .site-constraint {
      width: calc(${bpMedium} - 7vw);
    }
  }

  @media (min-width: ${bpLarge}) {
    html {
      font-size: 18px;
    }

    .site-constraint {
      width: calc(${bpLarge} - 7vw);
    }
  }

  @media (min-width: ${bpXLarge}) {
    .site-constraint {
      width: calc(${bpXLarge} - 7vw);
    }
  }
`;

export class PortfolioApp extends App {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {};

    if (Component && Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Nav />
        <Component className="site-constraint" {...pageProps} />
        <Footer />
        <GlobalStyles />
      </Container>
    );
  }
}

export default PortfolioApp;