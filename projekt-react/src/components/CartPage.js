import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";

function CartPage() {
  const { cart, updateQuantity } = useContext(CartContext);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleQuantityChange = (productId, event) => {
    const quantity = parseInt(event.target.value, 10);
    updateQuantity(productId, quantity);
  };

  const formatPrice = (price) => `$${price.toFixed(2)}`;

  const handleApplyCoupon = () => {
    if (coupon === "DISCOUNT10") {
      setDiscount(0.1); // 10% discount
    } else {
      setDiscount(0);
      alert("Invalid coupon code");
    }
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalPriceAfterDiscount = totalPrice * (1 - discount);

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={item.src} alt={item.des} className="cart-image" />
                  </td>
                  <td>{item.des}</td>
                  <td>{formatPrice(item.price)}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(event) => handleQuantityChange(item.id, event)}
                    />
                  </td>
                  <td>{formatPrice(item.price * item.quantity)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-summary">
            <div className="coupon-box">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button onClick={handleApplyCoupon}>Apply Coupon</button>
            </div>
            <div className="total-box">
              <p>Total: {formatPrice(totalPrice)}</p>
              {discount > 0 && (
                <p>Discount: {formatPrice(totalPrice * discount)}</p>
              )}
              <h3>Final Total: {formatPrice(totalPriceAfterDiscount)}</h3>
              <button className="payment-button">Proceed to Payment</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
