import React, { useLayoutEffect } from "react";
import CartPage from "../CartPage";

function Cart() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <CartPage />
    </>
  );
}

export default Cart;
