import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const CardPageCardItemContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  maxWidth: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  flexWrap: "wrap",
}));

export const NewsItemLink = styled(Link)(() => ({
  display: "inline-block",
  padding: "10px",
  width: "350px",
}))
