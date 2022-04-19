import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import fallbackImg from "../../assets/news.jpeg";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { CardContent, CardMedia, Typography } from "@mui/material";
import { Item, cardItemImg, cardItemLink } from "./styles";

const NCardItem = () => {
  const { id } = useParams();
  const article = useSelector((state) => state.mainReducer.list.find((_, i) => `${i}` === id));

  if (!article) {
    return (
      <Item sx={{ width: "100%", height: "90vh" }}>
        <Typography variant="h6">
          Произошла ошибка. Попробуйте посмотреть новость позже...
        </Typography>
      </Item>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, cursor: "pointer" }}>
      <Item elevation={2}>
        <Paper spacing={2} sx={{ p: 1 }}>
          <Box>
            <Typography variant="h6">{article.title}</Typography>
          </Box>
          <CardContent
            sx={{
              mt: 2,
              mb: 2,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CardMedia
              onError={(event) => event.target.removeAttribute("src")}
              style={cardItemImg}
              component="img"
              image={article.urlToImage ? article.urlToImage : fallbackImg}
              alt=""
            />
          </CardContent>

          <CardContent>
            <Typography variant="p" component="div">
              {article.description}
            </Typography>

            <Typography variant="p" component="div">
              <Typography variant="p" sx={{ fontWeight: "bold", pr: 1 }}>
                Автор статьи:
              </Typography>
              {article.author ? article.author : "Неизвестный автор"}
            </Typography>

            <Typography variant="p" component="div">
              <Typography variant="p" sx={{ fontWeight: "bold", pr: 1 }}>
                Дата публикации:
              </Typography>{" "}
              {article.date}
            </Typography>

            <a href={article.url} style={cardItemLink}>
              Читать новость полностью
            </a>
          </CardContent>
        </Paper>
      </Item>
    </Box>
  );
};

export default NCardItem;
