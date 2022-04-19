import React from "react";
import { format } from "date-fns";
import { CardContent, Box } from "@mui/material";
import tempImg from "../../assets/news.jpeg";
import {
  cardContentWrapper,
  StyledImg,
  CardContainer,
  CardImageItemWrapper,
  CardTitleItem,
  CardAuthorItem,
  CardContentItem,
  CardDateItem,
  CardDateAuthorWrapper,
  CardWrapper,
} from "./styles";

const Card = ({ data }) => {
  return (
    <CardContainer>
      <CardWrapper>
        <CardImageItemWrapper>
          <StyledImg
            src={data.urlToImage || tempImg}
            onError={(event) => event.target.removeAttribute("src")}
            alt=""
          />
        </CardImageItemWrapper>

        <CardContent>
          <Box style={cardContentWrapper}>
            <CardTitleItem variant="p">{data.title}</CardTitleItem>
          </Box>
          <Box style={cardContentWrapper}>
            <CardContentItem variant="p">{data.subTitle}</CardContentItem>
          </Box>

          <CardDateAuthorWrapper>
            <Box>
              <CardAuthorItem variant="p">
                Автор:{" "}
                {data.author !== null ? data.author : "Неизвестный автор"}
              </CardAuthorItem>
              <CardDateAuthorWrapper>
                <CardDateItem variant="p">
                  {format(new Date(data.publishedAt), "dd.MM.yyyy")}
                </CardDateItem>
              </CardDateAuthorWrapper>
            </Box>
          </CardDateAuthorWrapper>
        </CardContent>
      </CardWrapper>
    </CardContainer>
  );
};

export default Card;
