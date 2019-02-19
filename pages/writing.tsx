import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { remType } from "../constants/css";
import writings from "../constants/writing.json";
import { MetaTags } from "../components/meta_tags.component";
import { Stylable } from "../types/component.types";

const Writing = ({ className }: Stylable) => (
  <div className={className}>
    <MetaTags title="Writing / Mike Engel" description="Mike Engel’s personal blog" />
    <h1 className="h2">Writing</h1>
    {writings.map(({ title, summary }, idx) => {
      return (
        <div key={idx}>
          <h2 className="h3">
            <Link href={`/writing/${title.toLowerCase().replace(/ /g, "-")}`} prefetch>
              <a>{title}</a>
            </Link>
          </h2>
          <p className="writing-summary">{summary}</p>
        </div>
      );
    })}
  </div>
);

export default styled(Writing)`
  h1,
  h2 {
    margin-top: 0;
  }

  p {
    font-size: ${remType(21)};
  }

  div + div h2 {
    margin-top: 1em;
  }
`;
