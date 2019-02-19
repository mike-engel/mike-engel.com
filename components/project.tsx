import React from "react";

type Props = { description: string; name: string; url: string };

const Project = ({ description, name, url }: Props) => (
  <li>
    <h3>
      <a href={url}>{name}</a>
    </h3>
    <p>{description}</p>
  </li>
);

export default Project;
