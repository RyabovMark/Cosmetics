import React from "react";
import ContentLoader from "react-content-loader";
export const CardLoader = () => (
  <ContentLoader
    speed={4}
    height={400}
    width='100%'
    backgroundColor='#c7c7c7'
    foregroundColor='#eaebea'
  >
    <rect y='0' rx='10' ry='10' width='100%' height='75%' />
    <rect y='80%' rx='10' ry='10' width='100%' height='10%' />
  </ContentLoader>
);
