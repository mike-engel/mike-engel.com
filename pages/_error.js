import Layout from "../components/layout";
import PropTypes from "prop-types";
import React from "react";

const parseStatusCode = (jsonPageRes, res) => {
  res ? res.statusCode : jsonPageRes ? jsonPageRes.status : null;
};

const ErrorPage = ({ jsonPageRes, res }) => {
  const statusCode = parseStatusCode(jsonPageRes, res);

  if (statusCode >= 400 && statusCode < 500) {
    return (
      <h1>
        However you got here, there's nothing here. You may want to{" "}
        <a href="javascript:window.history.back();">go back</a> or{" "}
        <a href="/">start over</a>.
      </h1>
    );
  } else {
    return (
      <h1>
        Something horrible has gone wrong. You may want to{" "}
        <a href="javascript:window.history.back();">go back</a> or{" "}
        <a href="/">start over</a>.
      </h1>
    );
  }
};

ErrorPage.displayName = "ErrorPage";
ErrorPage.propTypes = {
  jsonPageRes: PropTypes.shape({
    status: PropTypes.number
  }),
  res: PropTypes.shape({
    status: PropTypes.number
  })
};
