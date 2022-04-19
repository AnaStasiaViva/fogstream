import { styled } from "@mui/material/styles";
import fallbackImg from "../../assets/news.jpeg";
import { Paper, Typography, Box } from "@mui/material";

export const CardContainer = styled(Box)(({ theme }) => ({
  width: "320px",
  height: "370px",
  borderRadius: "10px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
  overflow: "hidden",
  cursor: "pointer",
}));

export const CardImageItemWrapper = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${fallbackImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  //height: "inherit",
  width: "100%",
  height: "200px",
}));
export const CardTitleItem = styled(Typography)(({ theme }) => ({
  fontStyle: "italic",
  fontWeight: 800,
  overflow: "hidden",
  display: "-webkit-box",
  "-webkit-line-clamp": 2,
  "-webkit-box-orient": "vertical",
  height: "37px",
}));
export const CardAuthorItem = styled(Typography)(({ theme }) => ({
  maxWidth: "300px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));
export const CardContentItem = styled(Typography)(({ theme }) => ({
  overflow: "hidden",
  display: "-webkit-box",
  "-webkit-line-clamp": 2,
  "-webkit-box-orient": "vertical",
  height: "40px",
}));

export const CardContentItemWrapper = styled(Typography)(({ theme }) => ({
  maxWidth: "290px",
  padding: "7px",
  height: "200px",
}));

export const CardDateItem = styled(Typography)(({ theme }) => ({
  maxWidth: "92px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

export const CardDateAuthorWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
}));

export const CardWrapper = styled(Paper)(({ theme }) => ({
  width: "320px",
  height: "370px",
  overflow: "hidden",
}));

export const StyledImg = styled('img')(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}))

export const cardContentWrapper = {
  maxWidth: "290px",
  padding: "7px",
};

//Card item
export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  //padding: theme.spacing(1),
  padding: "20px",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const cardItemImg = {
  backgroundImage: `url(${fallbackImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "70vw",
};

export const cardItemLink = {
  color: "grey",
  textDecoration: "none",
};
