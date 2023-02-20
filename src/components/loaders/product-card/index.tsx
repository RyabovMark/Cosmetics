import React from "react";
import ContentLoader from "react-content-loader";

export const ProductCardLoader = ({width=300, height=400}:{width?:number, height?:number}):JSX.Element => (
  <ContentLoader
    speed={4}
    height={height}
    width={width}
    backgroundColor='#c7c7c7'
    foregroundColor='#eaebea'
  >
    <rect y='0' rx='10' ry='10' width='100%' height='80%' />
    <rect y='90%' rx='10' ry='10' width='100%' height='10%' />
  </ContentLoader>
);
