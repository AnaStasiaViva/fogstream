import { styled } from "@mui/material/styles";
import { Paper, Box } from "@mui/material";

export const HelpPageContainer = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100vw",
  height: "100%",
  padding: "20px 0",
}));

export const HelpPageWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "90vw",
  height: "100%",
}));
