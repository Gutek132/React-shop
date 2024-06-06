import React from "react";

function ContactSection() {
  return (
    <>
      <div id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our shops or contact us today</h2>
          <h3>Head Office</h3>
          <div>
            <li>
              <i className="fa-solid fa-map"></i>
              <p>Warszawska 23/23 Warszawa 01-111</p>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <p>contact@example.com</p>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <p>+48 345 678 910</p>
            </li>
            <li>
              <i className="fa-solid fa-clock"></i>
              <p>Mon - Sat: 9:00 - 17:00</p>
            </li>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39098.16956113413!2d21.005995000000002!3d52.231838!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8c92692e49%3A0xc2e97ae5311f2dc2!2sPalace%20of%20Culture%20and%20Science!5e0!3m2!1sen!2spl!4v1717436696675!5m2!1sen!2spl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default ContactSection;
