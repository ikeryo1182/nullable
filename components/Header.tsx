import { Container, Link, Row, Text } from "@nextui-org/react";

type Props = {};

export function Header(props: Props) {
  return (
    <header
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <Container fluid css={{ margin: "30px 0 20px 0" }}>
        <Row justify="center" align="center">
          <Link href="/">
            <Text
              h2
              weight="bold"
              css={{
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
              }}
            >
              Nullable&lt;T&gt;
            </Text>
          </Link>
        </Row>
      </Container>
    </header>
  );
}
