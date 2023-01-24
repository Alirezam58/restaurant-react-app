import React from 'react';
import './About.css';
import MultiplePizzas from '../assests/multiplePizzas.jpeg';

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h2>About Us</h2>
        <p>
          here you can find all information about our restaurant and other stuff
          like working hours and ...
        </p>
      </div>
    </div>
  );
}

export default About;
