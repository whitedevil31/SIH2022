import React, { useState } from "react";
import Modal from "react-modal";

export default function PageTwo() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [qrGenerated, setQrGenerated] = React.useState(false);
  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const generateQr = async () => {
    //create qr code

    setQrGenerated(true);
    console.log(qrGenerated);
  };
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
        <div className="flex pt-48 pl-72">
          <div className="w-1/2 flex justify-between">
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
          {qrGenerated == true ? (
            <div className="w-44 h-44  bg-white ">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" />
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="inst">
          <ul className="steps">
            <li>
              Step 1: Please download our app from Playstore and register there
              to continue{" "}
            </li>
            <li>
              Step 2: Once registered ,Please use the inbuilt QR code scanner to
              scan this QR code .
            </li>
            <li>
              Step 3: After scanning please click on verify status button to
              link Your Cowin profile with our App
            </li>
            <li>Step 4 : Enjoy seamless verification process now,Thank you</li>
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
          <div>
            Successfully connected . You can now use our App to generate offline
            OTP for future use
          </div>
        </Modal>
      </div>
    </div>
  );
}
