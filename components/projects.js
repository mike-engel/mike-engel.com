import Project from "../components/project";
import React from "react";

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

const Projects = () => (
  <dl>
    {projects.map(({ description, name, url }, idx) => (
      <Project description={description} key={idx} name={name} url={url} />
    ))}
    <style jsx>
      {`
        dl {
          font-size: 0;
        }
      `}
    </style>
  </dl>
);

Projects.displayName = "Projects";

export default Projects;
