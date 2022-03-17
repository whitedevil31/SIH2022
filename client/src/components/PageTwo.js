import React, { useState } from "react";
import Modal from "react-modal";

export default function PageTwo() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
const [qrGenerated,setQrGenerated ]=React.useState(false)
  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
const generateQr=async()=>{
  //create qr code 


  setQrGenerated(true)
  console.log(qrGenerated)
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
      <div className='flex pt-48 pl-72'>
      <div className='w-1/2 flex justify-between'>
      <div className='flex flex-col w-1/2'> <input type='text' className="py-2 border rounded-lg w-82" placeholder="Enter your mobile "/>
        <button className="bg-green-500 mt-8 py-2 " onClick={ generateQr}>GENERATE QR CODE</button></div>
       
      </div>
      {qrGenerated==true ? (<div className="w-44 h-44  bg-white ">
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png'/></div>): (<></>)}
      
      </div>
    
   
        <div className="inst">
          <ul className="steps">
            <li>Step 1: Please download our app from Playstore and register there to continue </li>
            <li>
              Step 2: Once registered ,Please use the inbuilt QR code scanner to scan this QR code .
            </li>
            <li>
              Step 3: After scanning please click on verify status button to link Your Cowin profile with our App
            </li>
            <li>
              Step 4 : Enjoy seamless verification process now,Thank you
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
          <button onClick={closeModal}>close</button>
          <div>Successfully connected . You can now use our App to generate offline OTP for future use</div>
        </Modal>
      </div>
    </div>
  );
}
