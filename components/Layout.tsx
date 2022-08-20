import { Header } from "./Header";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { PropsWithChildren } from "react";

import { Meta } from "../models/Meta";
import Head from "next/head";

type Props = {
  meta: Meta;
};

export function Layout(props: PropsWithChildren<Props>) {
  const baseUrl = process.env.BASE_URL ?? "";

  return (
    <>
      <Head>
        <title>{props.meta.title}</title>
        <meta property="description" content={props.meta.description} />
        <meta property="keywords" content={props.meta.keywords} />
        <meta property="og:title" content={props.meta.title} key="title" />
        <meta
          property="og:description"
          content={props.meta.description}
          key="description"
        />
        <meta
          property="og:image"
          content={props.meta.ogImage?.src}
          key="image"
        />
        <link rel="icon" href={`${baseUrl}/favicon.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@neer_chan" />
      </Head>
      <Header></Header>
      <Main>{props.children}</Main>
      <Footer></Footer>
    </>
  );
}
