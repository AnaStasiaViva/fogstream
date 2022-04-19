import React from "react";
import RingLoader from "./index";
import { RingLoaderWithWrap } from "./styles";

const RingLoaderWithWrapper = () => {
  return (
    <RingLoaderWithWrap>
      <RingLoader />
    </RingLoaderWithWrap>
  );
};

export default RingLoaderWithWrapper;
