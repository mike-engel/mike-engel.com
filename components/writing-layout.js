import { bpMedium, remType } from "../constants/css";
import commonmark from "commonmark";
import Layout from "./layout";
import PropTypes from "prop-types";
import React from "react";

const reader = new commonmark.Parser();
const writer = new commonmark.HtmlRenderer();

const WritingLayout = ({ text }) =>
  <Layout>
    <section
      dangerouslySetInnerHTML={{ __html: writer.render(reader.parse(text)) }}
    />
    <style jsx>
      {`
        section :global(h2), section :global(h3), section :global(h4) {
          margin-top: 0.7em;
          padding-top: 0.5em;
        }

        section :global(p) {
          ${remType(21)};
          line-height: 1.6;
        }

        @media (min-width: ${bpMedium}) {
          section :global(h2), section :global(h3), section :global(h4) {
            margin-top: 1em;
          }
        }
      `}
    </style>
  </Layout>;

WritingLayout.displayName = "WritingLayout";

export default WritingLayout;
