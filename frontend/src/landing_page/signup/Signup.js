
// import React from 'react';

// function Signup() {
//     return ( 
//         <h1>

//         </h1>
//      );
// }

// export default Signup;

import React, { useState } from "react";
import "./Signup.css";   // ✅ import here

function Signup() {
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mobile submitted:", mobile);
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h1>Open a free demat and trading account online</h1>
        <p>
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
        <img
          src="https://zerodha.com/static/images/landing.png"
          alt="Reports and analytics"
        />
      </div>

      <div className="signup-right">
        <h2>Signup now</h2>
        <p className="sub-text">Or track your existing application</p>

        <form onSubmit={handleSubmit}>
          <div className="mobile-input">
            <span className="country-code">🇮🇳 +91</span>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter your mobile number"
              required
            />
          </div>
          <button type="submit" className="btn">
            Get OTP
          </button>
        </form>

        <p className="terms">
          By proceeding, you agree to the Zerodha{" "}
          <a href="#">terms</a> & <a href="#">privacy policy</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
