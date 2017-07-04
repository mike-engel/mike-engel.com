import Project from "../components/project";
import React from "react";

const projects = [
  {
    description: "A polyfill to understand your users' preferred languages",
    name: "Locale",
    url: "https://locale.now.sh"
  },
  {
    description: "Convert SVG path data to a Swift 3 UIBezierPath",
    name: "swiftvg",
    url: "https://swiftvg.mike-engel.com"
  },
  {
    description:
      "Simple self-hosted bookmarking for your travels across the web.",
    name: "bkmrkd",
    url: "https://github.com/mike-engel/bkmrkd"
  },
  {
    description: "A super fast CLI tool to decode and encode JWTs built in Rust.",
    name: "jwt-cli",
    url: "https://github.com/mike-engel/jwt-cli"
  },
  {
    description:
      "Is your password unique enough? Check against the million most common passwords",
    name: "passablewords",
    url: "https://passablewords.now.sh"
  },
  {
    description:
      "Intelligent & responsive tooltips written in pure javascript.",
    name: "isotip",
    url: "https://datuhealth.github.io/isotip"
  }
];

const Projects = () =>
  <dl>
    {projects.map(({ description, name, url }, idx) =>
      <Project description={description} key={idx} name={name} url={url} />
    )}
    <style jsx>
      {`
        dl {
          font-size: 0;
        }
      `}
    </style>
  </dl>;

Projects.displayName = "Projects";

export default Projects;
