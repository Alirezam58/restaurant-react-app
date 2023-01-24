import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="headerContainer">
        <h2>My Pizzeria</h2>
        <p>A Pizza for every Taste</p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
