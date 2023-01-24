import React from 'react';
import MenuItem from '../components/MenuItem';
import './Menu.css';
import { MenuList } from '../assests/MenuList';

function Menu() {
  return (
    <div className="menu">
      <h2 className="menuTitle">Our Menu</h2>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
