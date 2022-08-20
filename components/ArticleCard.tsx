import { Card, Row, Text } from "@nextui-org/react";
import { Article as ArticleType } from "../models/Article";
import { formatDateString } from "../utils/DateUtil";
import { IoMdCreate, IoIosRefresh } from "react-icons/io";

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
        minHeight: "80px",
      }}
    >
      <Row justify="space-between" align="flex-end">
        <Text
          css={{
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          {props.article.title}
        </Text>
      </Row>
      <Row css={{ display: "flex", justifyContent: "flex-end" }}>
        <Text
          css={{
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            margin: "0 10px",
          }}
        >
          <IoMdCreate style={{ margin: "0 5px" }} />{" "}
          {formatDateString(props.article.systemPublishedAt)}
        </Text>
        {""}
        <Text
          css={{
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            margin: "0 10px",
          }}
        >
          <IoIosRefresh style={{ margin: "0 5px" }} />{" "}
          {formatDateString(props.article._sys.updatedAt)}
        </Text>
      </Row>
    </Card>
  );
}
