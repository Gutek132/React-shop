import React from "react";
import ShopItem from "./ShopItem";

function ProductsList() {
  return (
    <div id="product1" className="section-p1">
      <div className="pro-container">
        <ShopItem /*id, src, brand, des, price */
          id="1"
          src="/images/f1.jpg"
          brand="nike"
          des="Summer T-shirt blue"
          price={70}
        />
        <ShopItem
          id="2"
          src="/images/f2.jpg"
          brand="adidas"
          des="Summer T-shirt green"
          price={80}
        />
        <ShopItem
          id="3"
          src="/images/f3.jpg"
          brand="nike"
          des="Summer T-shirt"
          price={69.99}
        />
        <ShopItem
          id="4"
          src="/images/f4.jpg"
          brand="adidas"
          des="Summer T-shirt pink"
          price={49.99}
        />
        <ShopItem
          id="5"
          src="/images/f9.jpg"
          brand="nike"
          des="Summer T-shirt yellow"
          price={70}
        />
        <ShopItem
          id="6"
          src="/images/f6.jpg"
          brand="nike"
          des="Summer T-shirt"
          price={70}
        />
        <ShopItem
          id="7"
          src="/images/f7.jpg"
          brand="nike"
          des="Summer T-shirt roses"
          price={70}
        />
        <ShopItem
          id="8"
          src="/images/f8.jpg"
          brand="nike"
          des="Summer T-shirt"
          price={70}
        />
        <ShopItem
          id="9"
          src="/images/f1.jpg"
          brand="nike"
          des="Summer T-shirt blue"
          price={70}
        />
        <ShopItem
          id="10"
          src="/images/f2.jpg"
          brand="nike"
          des="Summer T-shirt green"
          price={70}
        />
        <ShopItem
          id="11"
          src="/images/f3.jpg"
          brand="nike"
          des="Summer T-shirt"
          price={70}
        />
        <ShopItem
          id="12"
          src="/images/f4.jpg"
          brand="nike"
          des="Summer T-shirt pink"
          price={100}
        />
        <ShopItem
          id="13"
          src="/images/f17.jpg"
          brand="nike"
          des="Summer T-shirt yellow"
          price={60}
        />
        <ShopItem
          id="14"
          src="/images/f16.jpg"
          brand="nike"
          des="Summer T-shirt"
          price={69}
        />
        <ShopItem
          id="15"
          src="/images/f19.jpg"
          brand="nike"
          des="shirt"
          price={90}
        />
        <ShopItem
          id="16"
          src="/images/f15.jpg"
          brand="nike"
          des="Summer T-shirt"
          price={80}
        />
      </div>
    </div>
  );
}

export default ProductsList;
