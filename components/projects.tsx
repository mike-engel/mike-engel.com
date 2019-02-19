import React from "react";
import styled from "styled-components";
import Project from "./project";
import { Stylable } from "../types/component.types";
import { bpMedium, bpLarge } from "../constants/css";

const projects = [
  {
    description: "A simple menu bar app for viewing a calendar",
    name: "Barnacal",
    url: "https://github.com/mike-engel/barnacal"
  },
  {
    description: "A super fast CLI tool to decode and encode JWTs built in Rust.",
    name: "jwt-cli",
    url: "https://github.com/mike-engel/jwt-cli"
  },
  {
    description: "A tiny library for parsing the Accept-Language header from browsers in Rust.",
    name: "accept-language-rs",
    url: "https://github.com/mike-engel/accept-language-rs"
  },
  {
    description: "A polyfill to understand your users' preferred languages.",
    name: "Locale",
    url: "https://locale.now.sh"
  },
  {
    description: "Convert SVG path data to a Swift 3 UIBezierPath.",
    name: "swiftvg",
    url: "https://swiftvg.mike-engel.com"
  },
  {
    description: "Minimal input that uses the floating label pattern for React.",
    name: "floating-label-react",
    url: "https://github.com/mike-engel/floating-label-react"
  }
];

const Projects = ({ className }: Stylable) => (
  <ul className={className}>
    {projects.map(({ description, name, url }, idx) => (
      <Project description={description} key={idx} name={name} url={url} />
    ))}
  </ul>
);

export default styled(Projects)`
  font-size: 0;

  h3,
  p {
    margin: 0;
    padding: 0;
  }

  h3 {
    font-weight: 700;
    font-size: 1rem;
  }

  p {
    margin-top: 0.5em;
    line-height: 1.4;
  }

  p + h3 {
    margin-top: 1em;
  }

  li {
    font-size: 1rem;
    display: inline-block;
    width: 100%;
    margin-bottom: 1.5em;
    vertical-align: top;
  }

  @media (min-width: ${bpMedium}) {
    li {
      margin-right: 2em;
      width: calc(50% - 2em);
    }

    li:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (min-width: ${bpLarge}) {
    li {
      margin-right: 2em;
      width: calc(33.3333333333% - 2em);
    }

    li:nth-child(2n) {
      margin-right: 2em;
    }

    li:nth-child(3n) {
      margin-right: 0;
    }
  }
`;
