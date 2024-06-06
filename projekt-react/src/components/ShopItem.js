import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { NotificationContext } from "./NotificationManager";

function ShopItem(props) {
  const { addToCart } = useContext(CartContext);
  const { addNotification } = useContext(NotificationContext);

  const handleAddToCart = () => {
    addToCart({
      id: props.id,
      src: props.src,
      brand: props.brand,
      des: props.des,
      price: props.price,
      quantity: 1,
    });
    addNotification(`${props.des} added to cart!`);
  };

  return (
    <div className="pro">
      <img src={props.src} alt="" />
      <div className="des">
        <span>{props.brand}</span>
        <h5>{props.des}</h5>
        <div className="star">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <h4>{props.price}$</h4>
      </div>
      <button onClick={handleAddToCart}>
        <i className="fa-solid fa-cart-shopping"></i>
      </button>
    </div>
  );
}

export default ShopItem;
