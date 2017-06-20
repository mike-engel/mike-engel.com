import Project from "../components/project";
import React from "react";

const projects = [
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
    description:
      "Is your password unique enough? Check against the million most common passwords",
    name: "passablewords",
    url: "https://passablewords.now.sh"
  },
  {
    description:
      "A command line tool for catching pesky CSS regressions before they go live.",
    name: "Stranger",
    url: "https://datuhealth.github.io/stranger"
  },
  {
    description:
      "Intelligent & responsive tooltips written in pure javascript.",
    name: "isotip",
    url: "https://datuhealth.github.io/isotip"
  },
  {
    description: "Provide context on your forms all the time.",
    name: "FloatingLabel.js",
    url: "https://datuhealth.github.io/floating-label"
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
