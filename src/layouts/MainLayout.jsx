import { Paper, Box } from "@mui/material";
import React from "react";

import NNavbar from "../components/NNavbar";

const MainLayout = (props) => {
  return (
    <Paper>
      <Box>
        <NNavbar></NNavbar>
        {props.children}
      </Box>
    </Paper>
  );
};

export default MainLayout;
