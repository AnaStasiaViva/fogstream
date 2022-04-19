import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { LoadingContainer } from "./styles";

function LoadingPlaceHolder() {
  return (
    <Grid container wrap="nowrap">
      <Box sx={{ width: 310, my: 2 }}>
        <Skeleton
          variant="rectangular"
          width={310}
          height={200}
          sx={{ borderRadius: 2 }}
        />

        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton width="60%" />
          <Skeleton width="60%" />
        </Box>
      </Box>
    </Grid>
  );
}

LoadingPlaceHolder.propTypes = {
  loading: PropTypes.bool,
};
export default LoadingPlaceHolder;

export const LoadingGrid = () => {
  return (
    <LoadingContainer>
      <Box sx={{ mr: 5 }}>
        <LoadingPlaceHolder />
      </Box>
      <Box sx={{ mr: 5 }}>
        <LoadingPlaceHolder />
      </Box>
      <Box sx={{ mr: 5 }}>
        <LoadingPlaceHolder />
      </Box>
      <Box sx={{ mr: 5 }}>
        <LoadingPlaceHolder />
      </Box>
      <Box sx={{ mr: 5 }}>
        <LoadingPlaceHolder />
      </Box>
      <Box sx={{ mr: 5 }}>
        <LoadingPlaceHolder />
      </Box>
      <Box sx={{ mr: 5 }}>
        <LoadingPlaceHolder />
      </Box>
    </LoadingContainer>
  );
};
