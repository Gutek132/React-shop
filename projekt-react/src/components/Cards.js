import React from "react";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>New collections and promotions</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              src="images/shirts.jpg"
              text="All shirts -40% off"
              label="Offer"
              path="/shop"
            />
            <CardItem
              src="images/trousers.jpg"
              text="-50% on the second pair of pants"
              label="Offer"
              path="/shop"
            />
          </ul>
          <ul className="cards-items">
            <CardItem
              src="../images/spring-col.jpg"
              text="Spring Collection"
              label="New"
              path="/shop"
            />
            <CardItem
              src="images/sport-col.jpg"
              text="Sport collection"
              label="New"
              path="/shop"
            />
            <CardItem
              src="images/kids-col.jpg"
              text="Kids collection"
              label="New"
              path="/shop"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
