import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const PaginationContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  marginTop: "15px",
}));
