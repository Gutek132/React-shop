import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import Contact from "./components/pages/Contact";
import Cart from "./components/pages/Cart";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";
import { CartProvider } from "./components/CartContext";
import { NotificationProvider } from "./components/NotificationManager";

function App() {
  return (
    <>
      <NotificationProvider>
        <CartProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
            <Footer />
          </Router>
        </CartProvider>
      </NotificationProvider>
    </>
  );
}

export default App;
