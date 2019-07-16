import { Component } from "react";
import { NextPageContext } from "next";

export default class RobotsTxt extends Component {
	static async getInitialProps({ res }: NextPageContext) {
		if (!res) return;

		if (!!res.write) {
			res.write(`User-agent: *
  Disallow:`);
		}

		if (res.end) {
			res.end();
		}
	}
}
