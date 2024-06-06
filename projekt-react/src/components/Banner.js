import React from "react";
import { Button } from "./Button";

function Banner() {
  return (
    <div className="banner">
      <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum facere
        placeat aspernatur illum
      </h2>
      <Button buttonSize="btn--large" to="/shop">
        Explore More
      </Button>
    </div>
  );
}

export default Banner;
