import React, { useState } from "react";
import Modal from "react-modal";
import close from "../assets/close.jpg";
import tick from "../assets/tick.png";

export default function PageTwo() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div className="pageTwo">
      <div className="bg-img">
        <div className="logo2">/eft Shift</div>
        <div className="qr-boc"></div>
        <div className="inst">
          <ul className="steps">
            <li>Step 1: Please download out app from </li>
            <li>
              Step 2 kjgyjrdjyfukhb yjgj yhfc kyvluhvygk hjb kuftyf kytv kluv u
              it d6rd6rt yugyu fiotf uiugo67trfi67f ou pyup87g
            </li>
            <li>
              Step 3 gcrestg il iyu gvyit glu buyotyfio uly ouvo7tyfri6ditf uo
              tyf7t y hi oyugi6ry d
            </li>
          </ul>
          <button
          onClick={openModal}
          class="verifybutton"
        >
          Verify Status
        </button>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal}>
          <img src={close} className="closesize" alt="Close" />
          </button>
          <div className="greentext">Verified Successfully</div>
          <img src={tick} className="ticksize" alt="Tick" />
          <div className="modaltext">You can use offline otp to login!</div>
        </Modal>
      </div>
    </div>
  );
}
