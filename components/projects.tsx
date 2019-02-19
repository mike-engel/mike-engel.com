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
  <dl className={className}>
    {projects.map(({ description, name, url }, idx) => (
      <Project description={description} key={idx} name={name} url={url} />
    ))}
  </dl>
);

export default styled(Projects)`
  font-size: 0;

  dt,
  dd {
    margin-left: 0;
    padding-left: 0;
  }

  dd + dt {
    margin-top: 1em;
  }

  dt {
    font-weight: 700;
  }

  div {
    font-size: 1rem;
    display: inline-block;
    width: 100%;
    margin-bottom: 1.5em;
    vertical-align: top;
  }

  @media (min-width: ${bpMedium}) {
    div {
      margin-right: 2em;
      width: calc(50% - 2em);
    }

    div:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (min-width: ${bpLarge}) {
    div {
      margin-right: 2em;
      width: calc(33.3333333333% - 2em);
    }

    div:nth-child(2n) {
      margin-right: 2em;
    }

    div:nth-child(3n) {
      margin-right: 0;
    }
  }
`;
