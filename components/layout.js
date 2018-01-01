import {
  black,
  blue,
  bpLarge,
  bpMedium,
  bpSmall,
  bpXLarge,
  h1Size,
  h2Size,
  h3Size,
  h4Size,
  helpers,
  hoverBlue,
  transitionTime,
  typography
} from "../constants/css";
import Footer from "./footer";
import Head from "next/head";
import Nav from "./nav";
import PropTypes from "prop-types";
import React, { Component } from "react";

const defaultProps = {
  description:
    "Mike Engel is a designer & developer creating pleasant, user driven experiences.",
  title: "Mike Engel"
};

class Layout extends Component {
  componentDidMount() {
    if (!window) return;

    window.addEventListener("load", () => {
      if (window.analyticsSPA) {
        analyticsSPA("d58055b3-a44a-440c-9679-b141dc90cca3");
      }
    });

    hljs.initHighlighting.called = false;
    hljs.initHighlighting();
  }

  render() {
    const { title, description, children } = this.props;

    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0,width=device-width"
          />
          <meta name="description" content={description} />
          <link rel="icon" type="image/png" href="/static/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
          />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github.min.css"
          />
        </Head>
        <Nav />
        <main className="site-constraint">{children}</main>
        <Footer />
        <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js" />
        <script>hljs.initHighlightingOnLoad();</script>
        <script src="https://analytics.mike-engel.com/a.js" />
        <style jsx global>
          {`
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

              a:not(.hidden-link):hover,
              a:not(.hidden-link):active {
                color: ${hoverBlue};
                border-color: ${hoverBlue};
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
          `}
        </style>
      </div>
    );
  }
}

Layout.displayName = "Layout";
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
  title: PropTypes.string
};
Layout.defaultProps = defaultProps;

export default Layout;
