import React, { useState } from "react";
import Modal from "react-modal";

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
        <div className="main">
          <div class="mb-4">
            <input
              class="shadow appearance-none border rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline input-box"
              id="username"
              type="text"
              onChange={(aadhars) => setAadhars({ value: aadhars })}
              placeholder="Enter your Aadhar Number"
            />
          </div>
          <button
            class="bg-green-400 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded submit-btn"
            onClick={() => {
              console.log("wazaaaa");
            }}
          >
            Get OTP
          </button>
        </div>
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
          <button onClick={openModal} class="verifybutton">
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
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
        </Modal>
      </div>
    </div>
  );
}
