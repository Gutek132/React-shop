import React, { useLayoutEffect } from "react";
import SectionHome from "../SectionHome";
import Cards from "../Cards";
import FeaturedSection from "../FeaturedSection";
import Banner from "../Banner";

function Home() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <SectionHome />
      <FeaturedSection />
      <Banner />
      <Cards />
    </>
  );
}

export default Home;
