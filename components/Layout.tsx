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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-121607703-2"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'UA-121607703-2');`,
          }}
        ></script>
        ï
      </Head>
      <Header></Header>
      <Main>{props.children}</Main>
      <Footer></Footer>
    </>
  );
}
