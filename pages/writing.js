import Layout from "../components/layout";
import Link from "next/link";
import React from "react";
import { remType } from "../constants/css";
import writings from "../constants/writing";

const Writing = () =>
  <Layout>
    <h1 className="h2">Writing</h1>
    {writings.map(({ title, summary, publishDate }, idx) => {
      return (
        <div key={idx}>
          <h2 className="h3">
            <Link
              href={`/writing/${title.toLowerCase().replace(/ /g, "-")}`}
              prefetch
            >
              <a>{title}</a>
            </Link>
          </h2>
          <p className="writing-summary">{summary}</p>
        </div>
      );
    })}
    <style jsx>
      {`
        h1, h2 {
          margin-top: 0;
        }

        p { font-size: ${remType(21)} }

        div + div h2 { margin-top: 1em; }
      `}
    </style>
  </Layout>;

Writing.displayName = "Writing";

export default Writing;
