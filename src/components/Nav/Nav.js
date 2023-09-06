import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <section className="nav">
      <ul className="nav__wrapper">
        <li className="nav__wrapper-item">INDONESIA</li>
        <li className="nav__wrapper-item">THAILAND</li>
        <li className="nav__wrapper-item">YEREVAN</li>
        <li className="nav__wrapper-item">GEORGIA</li>
        <li className="nav__wrapper-item">TURKEY</li>
        <li className="nav__wrapper-item">UAE</li>
      </ul>
    </section>
  );
}

export default Nav;
