import React, { useState } from "react";
import aadhar from "../assets/aadhar.png";

export default function EnterOtp() {
  // const Data = {
  //   aadharNumber: aadhars.value,
  // };

  const [aadhars, setAadhars] = useState("");

  return (
    <div className="enterOtp">
      <form className="form">
        <img src={aadhar} className="aadhar" alt="aadhar" />
        <h1>Get your COVID-19 Certificate.</h1>
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
      </form>
    </div>
  );
}
