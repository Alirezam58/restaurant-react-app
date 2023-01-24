import React from 'react';
import './Contact.css';
import pizzaLeft from '../assests/pizzaLeft.jpg';

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${pizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h2>Contact us</h2>
        <form id="contact-form" method="POST">
          <label htmlFor=""></label>
          <input
            name="name"
            placeholder="Enter full name..."
            type="text"
            required
          />
          <label htmlFor="email">Enter your Email</label>
          <input
            name="email"
            placeholder="Enter Your Email..."
            type="email"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            placeholder="Enter Message..."
            rows="6"
            required
          ></textarea>
          <button type="submite">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
