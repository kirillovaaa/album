import React from "react";
// import indonesia from "../../images/indonesia-promo.png";
import sea from "../../images/sea.jpeg";
import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__wrapper">
        <img src={sea} className="promo__image" alt="indonesia" />
        <div className="promo__information">
          <h3 className="promo__place">
            <span class="colortext">KAS TURKEY</span>
          </h3>
          <h2 className="promo__title">
            I can show you
            <br /> more!
          </h2>
          <p className="promo__description">
            Hi, I'm Sasha and I travel a lot and I'll show you the album that I
            created in these 2 years
          </p>
          <div className="promo__more">
            <span className="promo__more-text">
              <span class="colortext">See more</span>
            </span>
            <span className="promo__more-icon">
              <span class="colortext">→</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
