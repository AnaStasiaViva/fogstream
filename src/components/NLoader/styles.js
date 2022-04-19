import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const RingLoaderWithWrap = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const RingLoaderCmp = styled(Box)(({ theme }) => ({
  display: "inline-block",
  width: "80px",
  height: "80px",

  "&::after": {
    content: "",
    display: "block",
    width: "64px",
    height: "64px",
    margin: "8px",
    borderRadius: "50%",
    border: "6px solid #0166F3",
    borderColor: "#0166F3 transparent #0166F3 transparent",
    animation: "lds-dual-ring 1.2s linear infinite",
  },
  "@keyframes lds-dual-ring": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100% ": {
      transform: "rotate(360deg)",
    },
  },
}));
