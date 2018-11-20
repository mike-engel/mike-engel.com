import { bpMedium, h1Size, h2Size, h3Size, h4Size } from "../constants/css";
import ContactForm from "../components/contact-form";
import Layout from "../components/layout";
import Projects from "../components/projects";
import React from "react";

const Index = () => (
  <Layout>
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
    <style jsx>
      {`
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
      `}
    </style>
  </Layout>
);

Index.displayName = "Index";

export default Index;
