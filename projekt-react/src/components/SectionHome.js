import React from "react";
import { Button } from "./Button";

function SectionHome() {
  return (
    <div className="hero-container">
      <h1>Get the best quality clothes</h1>
      <p>Save up to 70% with coupons and promotions</p>
      <div className="hero-btns">
        <Button
          to="/shop"
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          SHOP NOW
        </Button>
      </div>
    </div>
  );
}

export default SectionHome;
