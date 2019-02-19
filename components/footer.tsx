import React from "react";
import styled from "styled-components";
import { grey } from "../constants/css";
import { Stylable } from "../types/component.types";

const Footer = ({ className }: Stylable) => (
  <footer className={`${className} site-constraint`}>
    <span>&copy; {new Date().getFullYear()} Mike Engel</span>
    <a href="https://twitter.com/beardfury" target="_blank">
      Twitter
    </a>
    <a href="https://github.com/mike-engel" target="_blank">
      Github
    </a>
    <a href="https://www.linkedin.com/in/beardfury" target="_blank">
      LinkedIn
    </a>
  </footer>
);

export default styled(Footer)`
  padding: 2em 0 1em 0;

  & > * {
    font-size: 0.66666rem;
  }

  span {
    color: ${grey};
  }

  a {
    margin-left: 1em;
  }
`;
