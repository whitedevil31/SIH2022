import React, { useState } from 'react'
import Modal from 'react-modal'
import QRCode from 'react-qr-code'

import close from '../assets/close.jpg'
import tick from '../assets/tick.png'
import axios, { AxiosResponse } from 'axios'
import Cryptr from 'cryptr'

export default function PageTwo() {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [aadhars, setAadhars] = useState('')
  const [encrypted, setEncrypted] = useState('')
  const [qrGenerated, setQrGenerated] = React.useState(false)
  let subtitle
  const cryptr = new Cryptr('sih2020')

  const data = {
    aadharNumber: aadhars,
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  // console.log(data)
  let encryptedData
  const generateQr = async () => {
    //setQrGenerated(true)
    try {
      const postData = await axios.post(
        'http://localhost:5000/aadhar/get',
        data,
      )
      const encryptedMobile = cryptr.encrypt(postData.data)
      const websiteName = 'https://www.cowin.gov.in/'
      encryptedData = {
        mobile: encryptedMobile,
        websiteName,
      }
    } catch (e) {
      console.log(e)
    }
  }
  function afterOpenModal() {
    subtitle.style.color = '#f00'
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }

  return (
    <div className="pageTwo">
      <div className="bg-img">
        <div className="logo2">/eft Shift</div>
        <div className="flex pt-48 pl-72">
          <div className="w-1/2 flex justify-between">
            <div class="mb-4">
              <input
                class="aadhaarinput"
                id="username"
                type="text"
                onChange={(e) => setAadhars(e.target.value)}
                placeholder="Enter your Aadhar Number"
              />
            </div>
            <button class="genqr" onClick={generateQr}>
              Generate QR Code!
            </button>
          </div>
          {qrGenerated == true ? (
            <div className="afterqr">
              <QRCode value={encryptedData} />
            </div>
          ) : (
            <>
              <div className="qrempty"></div>
            </>
          )}
        </div>

        <div className="inst">
          <ul className="steps">
            <li>
              Step 1: Please download our app from Playstore and register there
              to continue{' '}
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
        </div>
        <button onClick={openModal} class="verifybutton">
          Verify Status
        </button>

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
  )
}
