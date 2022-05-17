import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { CssBaseline } from "@nextui-org/react";
import {
  Children,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
} from "react";

interface MyDocumentInitialProps extends DocumentInitialProps {
  styles:
    | ReactElement<any, string | JSXElementConstructor<any>>[]
    | ReactFragment
    | undefined;
}

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<MyDocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [...Children.toArray(initialProps.styles)],
    };
  }

  render() {
    return (
      <Html lang="jp">
        <Head>{CssBaseline.flush()}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
