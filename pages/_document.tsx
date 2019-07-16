import Document, {
	Head,
	Main,
	NextScript,
	DocumentContext
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import { black } from "../constants/css";

export default class PortfolioDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
				});

			const initialProps = await Document.getInitialProps(ctx);

			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta
						name="viewport"
						content="initial-scale=1.0,width=device-width"
					/>
					<meta name="theme-color" content={black} />
					<meta
						name="p:domain_verify"
						content="ac56949deddb26b9107af368eea0b43b"
					/>

					<link rel="manifest" href="/static/manifest.json" />
					<link rel="icon" type="image/png" href="/static/favicon.ico" />
					<link
						rel="stylesheet"
						href="https://unpkg.com/a11y-css-reset/combo.css"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
