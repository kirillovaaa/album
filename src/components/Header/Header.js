import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import instagram from "../../images/instagram.svg";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__items">
        <ScrollIntoView selector="#about-project">
          <button className="header__item-button">Information</button>
        </ScrollIntoView>
        <button className="header__item-button">Me</button>

        <ScrollIntoView selector="#album">
          <button className="header__item-button">Album</button>
        </ScrollIntoView>
      </div>

      <div className="header__wrapper">
        <div className="header__wrapper-link">
          <span className="header__text">Folow me</span>
          <a
            className="header__image-link"
            href="https://www.instagram.com/yaaasashaaa"
            target="blank"
          >
            <img src={instagram} className="header__image" alt="instagram" />
          </a>
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
