import React from "react";

function Hero() {
  return (
    <div className="container ">
      <div className="row p-5 mt-5 border-bottom text-center ">
        <h1 className="mb-3">Pricing</h1>
        <p className="text-muted fs-4">
          Free quity invesement and flat $20 traday and F&O traders
        </p>
      </div>
      <div className="row p-3 mt-5 text-center">
        <div className="col-4 p-5">
          <img src="media/pricing0.svg" />
          <h1 className="fs-3">Free Equity Delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        <div className="col-4 p-5">
          <img src="media/intradayTrades.svg"/>
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p>Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.</p>
        </div>

        <div className="col-4 p-5">
          <img src="media/pricing0.svg" />
          <h1 className="fs-3">Free direct MF</h1>
          <p>All equity delivery investments (NSE , BSE), are absolutely free — ₹ 0 commission.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
