import React from "react";
import indonesia from "../../images/indonesia-promo.png";
import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__wrapper">
        <img src={indonesia} className="promo__image" alt="indonesia" />
        <div className="promo__information">
          <h2 className="promo__title">
            I can show you
            <br /> more!
          </h2>
          <p className="promo__tdescription">
            hi, I'm Sasha and I travel a lot and I'll show you the album that I
            created in these 2 years
          </p>
          <div className="promo__more">
            <span className="promo__more-text">See more</span>
            <span className="promo__more-icon">→</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
