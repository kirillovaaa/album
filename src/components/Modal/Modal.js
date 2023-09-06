import React from "react";
import "./Modal.css";

const Modal = ({ active, setActive }) => {
  return (
    <div
      className={active ? "modal modal_active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <p className="modal__content-text">TEXT</p>
        <p className="modal__content-text">TEXT</p>
      </div>
    </div>
  );
};
export default Modal;
