import { bpLarge, bpMedium } from "../constants/css";
import PropTypes from "prop-types";
import React from "react";

const Project = ({ description, name, url }) =>
  <span>
    <dt><a href={url}>{name}</a></dt>
    <dd>{description}</dd>
    <style jsx>
      {`
      dt,
      dd {
        margin-left: 0;
        padding-left: 0;
      }

      dd + dt { margin-top: 1em; }

      dt { font-weight: 700; }

      span {
          font-size: 1rem;
          display: inline-block;
          width: 100%;
          margin-bottom: 1.5em;
          vertical-align: top;
      }

      @media (min-width: ${bpMedium}) {
          span {
              margin-right:2em;
              width: calc(50% - 2em);
          }

          span:nth-child(2n) { margin-right: 0; }
      }

      @media (min-width: ${bpLarge}) {
          span {
              margin-right:2em;
              width: calc(33.3333333333% - 2em);
          }

          span:nth-child(2n) { margin-right: 2em; }

          span:nth-child(3n) { margin-right: 0; }
      }
    `}
    </style>
  </span>;

Project.displayName = "Project";
Project.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Project;
