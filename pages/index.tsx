import React from "react";
import styled from "styled-components";
import { bpMedium, h1Size, h3Size } from "../constants/css";
import ContactForm from "../components/contact-form";
import Projects from "../components/projects";
import { Stylable } from "../types/component.types";
import { MetaTags } from "../components/meta_tags.component";

const Index = ({ className }: Stylable) => (
  <div className={className}>
    <MetaTags />
    <h1 className="h2">
      I&rsquo;m a designer &amp; developer creating pleasant, user driven experiences and leading
      teams.
    </h1>
    <h2 className="h3" id="projects">
      Recent projects
    </h2>
    <Projects />
    <h2 className="h3" id="contact">
      Contact
    </h2>
    <ContactForm />
  </div>
);

export default styled(Index)`
  h1,
  h2 {
    padding-top: 0.5em;
  }

  h1 {
    margin: 0.5em 0;
  }

  h2 {
    margin-top: 1.5em;
  }

  @media (min-width: ${bpMedium}) {
    h1 {
      font-size: ${h1Size};
      margin: 1em 0;
    }

    h2 {
      font-size: ${h3Size};
      margin-top: 3em;
    }
  }
`;
