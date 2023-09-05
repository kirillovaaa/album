import React from "react";
// import ScrollInto from "react-scroll-into-view";
import instagram from "../../images/instagram.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      {/* <ul className="header__items">
        {textLabels.main.navTab.map((tab) => (
          <li key={tab.selector} className="header__item">
            <ScrollInto selector={tab.selector} className="header__item-link">
              {tab.label}
            </ScrollInto>
          </li>
        ))}
      </ul> */}
      <ul className="header__items">
        <li className="header__item">Information</li>
        <li className="header__item">Me</li>
        <li className="header__item">Album</li>
      </ul>

      <div className="header__wrapper">
        <div className="header__wrapper-link">
          <span className="header__text">Folow me</span>
          <img src={instagram} className="header__image" alt="instagram" />
        </div>
        <div className="header__name">
          <h1 className="header__title">Discover</h1>
          <h1 className="header__subtitle">Wonderful World</h1>
        </div>
      </div>

      <div className="header__more">
        <span className="header__more-text">Scroll down</span>
        <span className="header__more-icon">↓</span>
      </div>
    </header>
  );
}

export default Header;
