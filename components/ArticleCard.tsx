import { Card, Row, Text } from "@nextui-org/react";
import { Article as ArticleType } from "../models/Article";
import { formatDateString } from "../utils/DateUtil";
import { GrUpdate } from "react-icons/gr";
import { IoMdCreate } from "react-icons/io";

type Props = {
  article: ArticleType;
};

export function ArticleCard(props: Props) {
  return (
    <Card
      css={{
        justifyContent: "space-between",
        flexDirection: "column",
        display: "flex",
        width: "100%",
        minWidth: "200px",
        maxWidth: "600px",
        minHeight: "120px",
      }}
    >
      <Row justify="space-between" align="flex-end">
        <Text h3>{props.article.title}</Text>
      </Row>
      <Row css={{ display: "flex", justifyContent: "flex-end" }}>
        <Text
          css={{
            display: "flex",
            alignItems: "center",
            margin: "0 10px",
            fontWeight: "bold",
          }}
        >
          <IoMdCreate style={{ margin: "0 5px" }} />{" "}
          {formatDateString(props.article.systemPublishedAt)}
        </Text>
        {""}
        <Text
          css={{
            display: "flex",
            alignItems: "center",
            margin: "0 10px",
            fontWeight: "bold",
          }}
        >
          <GrUpdate style={{ margin: "0 5px" }} />{" "}
          {formatDateString(props.article._sys.updatedAt)}
        </Text>
      </Row>
    </Card>
  );
}
