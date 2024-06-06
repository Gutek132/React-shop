import React, { useLayoutEffect } from "react";
import Header from "../Header";
import ProductsList from "../ProductsList";

function Shop() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header
        maintext="Shop the Latest Trends"
        bottomtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <ProductsList />
    </>
  );
}

export default Shop;
