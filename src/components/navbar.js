import React from "react";
import "./style.css";


const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          WELCOME TO TJ SHOPPY
        </span>
        <div className="my_shop" onClick={() => setShow(true)}>Home</div>
        <div className="my_shop" onClick={() => setShow(true)}>Contact</div>
        <div className="my_shop" onClick={() => setShow(true)}>Profile</div>


        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          {/* <span>{size}</span> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;