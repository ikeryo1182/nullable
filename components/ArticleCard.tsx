import { Card, Row, Text } from "@nextui-org/react";
import { Article as ArticleType } from "../models/Article";
import { formatDateString } from "../utils/DateUtil";
import { IoMdCreate, IoIosRefresh } from "react-icons/io";

type Props = {
  article: ArticleType;
};

export function ArticleCard(props: Props) {
  return (
    <Row
      css={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Text
        css={{
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        {props.article.title}
      </Text>
      <Text
        css={{
          fontSize: "12px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          margin: "0 10px",
          minWidth: "70px",
        }}
      >
        {formatDateString(props.article.systemPublishedAt)}
      </Text>
    </Row>
  );
}
