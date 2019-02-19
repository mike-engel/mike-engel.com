import React from "react";

type Props = { description: string; name: string; url: string };

const Project = ({ description, name, url }: Props) => (
  <div>
    <dt>
      <a href={url}>{name}</a>
    </dt>
    <dd>{description}</dd>
  </div>
);

export default Project;
