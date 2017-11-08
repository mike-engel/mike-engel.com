import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  componentDidMount() {
    if (!window) return;

    window.addEventListener("load", () => {
      if (window.analyticsMain) {
        analyticsMain("d58055b3-a44a-440c-9679-b141dc90cca3");
      }
    });
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
        </Head>
        <body className="custom_class">
          <noscript>
            <img
              src="https://analytics.mike-engel.com/api/a.gif"
              alt="backup analytics request"
            />
          </noscript>
          {this.props.customValue}
          <Main />
          <NextScript />
          <script src="https://analytics.mike-engel.com/a.js" />
        </body>
      </html>
    );
  }
}
