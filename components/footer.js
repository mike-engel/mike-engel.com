import { grey } from "../constants/css";
import React from "react";

const Footer = () =>
  <footer className="site-constraint">
    <span>
      &copy; {new Date().getFullYear()} Mike Engel
    </span>
    <a href="https://twitter.com/beardfury">Twitter</a>
    <a href="https://github.com/mike-engel">Github</a>
    <a href="https://www.linkedin.com/in/beardfury">
      LinkedIn
    </a>
    <style jsx>
      {`
      footer { padding: 2em 0 1em 0; }

      footer > * { font-size: 0.66666rem; }

      span { color: ${grey}; }

      a { margin-left: 1em; }
    `}
    </style>
  </footer>;

Footer.displayName = "Footer";

export default Footer;
