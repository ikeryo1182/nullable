import { Container, Link, Row, Text } from "@nextui-org/react";

type Props = {};

export function Footer(props: Props) {
  return (
    <footer style={{ display: "flex", justifyContent: "center" }}>
      <Container fluid css={{ margin: "30px 10px" }}>
        <Row justify="center" align="center">
          <Text css={{ fontSize: 12 }}>
            © 2018-{new Date().getFullYear()} Nullable&lt;T&gt; written by{" "}
            <Link href="https://twitter.com/neer_chan">@neer_chan</Link>
          </Text>
        </Row>
      </Container>
    </footer>
  );
}
