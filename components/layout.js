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
  hoverBlue,
  transitionTime
} from "../constants/css";
import Footer from "./footer";
import Head from "next/head";
import Nav from "./nav";
import PropTypes from "prop-types";
import React from "react";

const defaultProps = {
  description:
    "Mike Engel is a designer & developer creating pleasant, user driven experiences.",
  title: "Mike Engel"
};

const Layout = ({ children, description, title }) =>
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0,width=device-width" />
      <meta name="description" content={description} />
      <link rel="shortcut icon" type="image/png" href="/static/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
      />
    </Head>
    <Nav />
    <main className="site-constraint">
      {children}
    </main>
    <Footer />
    <style jsx global>
      {`
        * { box-sizing: border-box; }

        html,
        body {
          color: ${black};
          font-size: 16px;
          height: 100%;
          line-height: 1.4;
          margin: 0;
          padding: 0;
          width: 100%;
        }

        body { font-family: -apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif; }

        a {
          color: ${blue};
          text-decoration: none;
          border-bottom: 2px solid transparent;
          transition: color ${transitionTime}, border-color ${transitionTime};
        }

        ul {
          list-style-type: none;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        h1,
        h2,
        h3 {
          font-weight: 700;
          line-height: 1.2;
        }

        h1,
        h2,
        h3,
        h4 { max-width: 25em; }

        h1 { font-size: ${h1Size}; }
        h2 { font-size: ${h2Size}; }
        h3 { font-size: ${h3Size}; }
        h4 { font-size: ${h4Size}; }

        p {
          line-height: 1.6;
          max-width: 40em;
        }

        .site-constraint {
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
          html { font-size: 18px; }

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
  </div>;

Layout.displayName = "Layout";
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
  title: PropTypes.string
};
Layout.defaultProps = defaultProps;

export default Layout;
