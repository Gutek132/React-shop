import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./components/pages/Shop";
import Contact from "./components/pages/Contact";
import Cart from "./components/pages/Cart";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={<Home />} />
          <Route path="/shop" component={Shop} />
          <Route path="/contact" component={Contact} />
          <Route path="/cart" component={Cart} />
          <Route path="/sign-up" component={SignUp} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
