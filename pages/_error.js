import React from "react";
import Layout from "../components/layout";

export default class ErrorPage extends React.Component {
  static displayName = "ErrorPage";

  static getInitialProps({ req, res }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;

    return { statusCode };
  }

  render() {
    return (
      <Layout>
        <h1>
          {this.props.statusCode
            ? "However you got here, there's nothing here."
            : "Something horrible has gone wrong. You may want to"}{" "}
          You may want to{" "}
          <a href="javascript:window.history.back();">go back</a> or{" "}
          <a href="/">start over</a>.
        </h1>
      </Layout>
    );
  }
}
