import { Component } from "react";
import { NextContext } from "next";

export default class RobotsTxt extends Component {
  static async getInitialProps({ res }: NextContext) {
    if (!res) return;

    res.write(`User-agent: *
Disallow:`);
    res.end();
  }
}
