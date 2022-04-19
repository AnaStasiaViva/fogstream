import React from "react";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";

export const NButtonsSearch = ({ title = "", ...props }) => {
  return (
    <Button {...props} variant="outlined" startIcon={<SearchIcon />}>
      {title}
    </Button>
  );
};

export const NButtonsCancel = ({ title = "", ...props }) => {
  return (
    <Button {...props} variant="outlined" startIcon={<CancelIcon />}>
      {title}
    </Button>
  );
};
