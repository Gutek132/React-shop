import React from "react";
import { Button } from "./Button";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Shop shop nie wiem</h1>
      <p>bim bam bim bam</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          START SHOPPING
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
