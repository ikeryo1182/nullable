import { Header } from "./Header";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { PropsWithChildren } from "react";

import { useTheme as useNextTheme } from "next-themes";
import { useTheme, Switch } from "@nextui-org/react";
import { Meta } from "../models/Meta";
import Head from "next/head";

type Props = {
  meta: Meta;
};

export function Layout(props: PropsWithChildren<Props>) {
  // const { setTheme } = useNextTheme();
  // const { isDark } = useTheme();

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
      </Head>
      <Header></Header>
      {/* <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      /> */}
      <Main>{props.children}</Main>
      <Footer></Footer>
    </>
  );
}
