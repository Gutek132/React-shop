import React from "react";
import ShopItem from "./ShopItem";

function FeaturedSection() {
  return (
    <div id="product1" className="section-p1">
      <h2>Featured Products</h2>
      <div className="pro-container">
        <ShopItem /*src, brand, des, path, price */
          src="/images/f1.jpg"
          brand="nike"
          des="Summer T-shirt blue"
          path="#"
          price="70$"
        />
        <ShopItem
          src="/images/f2.jpg"
          brand="nike"
          des="Summer T-shirt green"
          path="#"
          price="70$"
        />
        <ShopItem
          src="/images/f3.jpg"
          brand="nike"
          des="Summer T-shirt"
          path="#"
          price="70$"
        />
        <ShopItem
          src="/images/f4.jpg"
          brand="nike"
          des="Summer T-shirt pink"
          path="#"
          price="70$"
        />
        <ShopItem
          src="/images/f9.jpg"
          brand="nike"
          des="Summer T-shirt yellow"
          path="#"
          price="70$"
        />
        <ShopItem
          src="/images/f6.jpg"
          brand="nike"
          des="Summer T-shirt"
          path="#"
          price="70$"
        />
        <ShopItem
          src="/images/f7.jpg"
          brand="nike"
          des="Summer T-shirt roses"
          path="#"
          price="70$"
        />
        <ShopItem
          src="/images/f8.jpg"
          brand="nike"
          des="Summer T-shirt"
          path="#"
          price="70$"
        />
      </div>
    </div>
  );
}

export default FeaturedSection;
