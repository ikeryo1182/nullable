import { Container, Text } from "@nextui-org/react";
import { PropsWithChildren } from "react";

type Props = {};

export function Main(props: PropsWithChildren<Props>) {
  return (
    <main>
      <Container
        css={{
          minHeight: "calc(100vh - 94px - 96px)",
          padding: 0,
        }}
      >
        {props.children}
      </Container>
    </main>
  );
}
