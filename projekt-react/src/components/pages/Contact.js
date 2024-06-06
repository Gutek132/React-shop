import React, { useLayoutEffect } from "react";
import Header from "../Header";
import ContactSection from "../ContactSection";

function Contact() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header
        maintext="Contact Us"
        bottomtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <ContactSection />
    </>
  );
}

export default Contact;
