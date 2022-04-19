import { Typography } from "@mui/material";
import React from "react";
import { HelpPageContainer, HelpPageWrapper } from "./styles";
import { aboutUsData } from "../../utils/data";

function Help() {
  return (
    <HelpPageContainer variant="outlined">
      <HelpPageWrapper>
        <Typography sx={{ my: 2 }} variant="h5">
          Help page title
        </Typography>

        {aboutUsData?.map((item) => (
          <Typography sx={{ my: 2 }}>{item.aboutUsContent}</Typography>
        ))}
      </HelpPageWrapper>
    </HelpPageContainer>
  );
}

export default Help;
