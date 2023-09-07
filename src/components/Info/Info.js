import React, { useState } from "react";
import "./Info.css";
import pointer from "../../images/pointer.svg";
import Modal from "../../components/Modal/Modal";

const Info = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <section className="info" id="about-project">
        <div className="info__wrapper">
          <button className="info__button" onClick={() => setModalActive(true)}>
            <img src={pointer} className="info__button-image" alt="pointer" />
          </button>
          <p className="info__title">
            from cold Siberia to
            <br /> warm, mountainous and <br /> incredible countries
          </p>
          <p className="info__subtitle">
            Enjoying the vast expanse of the sea of ​​​​sand, witnessing the
            splendor of Mount Semeru that soars into the <br /> sky, and gazing
            at the beauty of the sun moving out of its bed or otherwise enjoying
            the dim twilight from <br />
            the Bromo ridge is an unforgettable experience when visiting Bromo.
          </p>
          <Modal active={modalActive} setActive={setModalActive} />
        </div>
      </section>
    </>
  );
};

export default Info;
