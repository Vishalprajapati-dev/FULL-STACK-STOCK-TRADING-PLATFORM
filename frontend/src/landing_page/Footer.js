import React from "react";

function Footer() {
  return (
    <footer style={{backgroundColor: "rgb(250,250,250)"}}>
    <div className="cotainer border-top mt-5">
      <div className="row max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-10 space-y-1 mt-5">


         <div className="col">
          <div>
          <img src="/media/logo.svg" style={{ width: "40%" }} className="h-4 mb-3"/>
          <p className="text-gray-500">
            &copy; 2010 - 2025, Zerodha Broking Ltd. 
            <br/>All rights reserved.
          </p>
          </div>
        </div>


        <div className="col max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <p className="font-semibold mb-2">Company</p>
          <ul className="space-y-1">
         <li> <a href="">About</a></li>
         
          <li><a href="">Product</a></li>
        
          <li><a href="">Pricing</a></li>
       
          <li><a href="">Refferal Program</a></li>
          
          <li><a href="">Careers</a></li>
          
          <li><a href="">Zerodha.tech</a></li>
         
         <li> <a href="">Press and Media</a></li>
        
          <li><a href="">Zerodha Cares(CSR)</a></li>
          </ul>
        </div>

        <div className="col">
          <p className="font-semibold mb-2">Support</p>
          <ul className="space-y-1">
          <li><a href="">Contact us</a></li>
      
          <li><a href="">Support Portal</a></li>
         
          <li><a href="">Z-Connect blog</a></li>
          
          <li><a href="">List of changes</a></li>
       
          <li><a href="">Downloads & resources</a></li>
          
          <li><a href="">Videos</a></li>
       
         <li> <a href="">Market overview</a></li>
          
          <li><a href="">How to file a complaint?</a></li>
        
         <li> <a href="">Status of your complaints</a></li>
          </ul>
        </div>

        <div className="col">
          <p className="font-semibold mb-2 ">Account</p>
          <ul className="space-y-0">
         <li> <a href="">Open an account</a></li>
          <li><a href="">Fund transfer</a></li>
          </ul>
        </div>

      </div>

     <div className="max-w-4xl mx-auto px-4 py-4 text-xs text-gray-100 leading-relaxed space-y-4 mt-5 text-small text-muted">
      <p>
        Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
        no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking
        Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through
        Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration
        no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154,
        4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
        Phase, Bengaluru - 560078, Karnataka, India. For any complaints
        pertaining to securities broking please write to complaints@zerodha.com,
        for DP related to dp@zerodha.com. Please ensure you carefully read the
        Risk Disclosure Document as prescribed by SEBI | ICF
      </p>
      

      <p>
        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
        Mandatory details for filing complaints on SCORES: Name, PAN, Address,
        Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy
        redressal of the grievances
      </p>


      <p>
        Investments in securities market are subject to market risks; read all
        the related documents carefully before investing.
      </p>


      <p>
        Attention investors: 1) Stock brokers can accept securities as margins
        from clients only by way of pledge in the depository system w.e.f
        September 01, 2020. 2) Update your e-mail and phone number with your
        stock broker / depository participant and receive OTP directly from
        depository on your e-mail and/or mobile number to create pledge. 3)
        Check your securities / MF / bonds in the consolidated account statement
        issued by NSDL/CDSL every month.
      </p>


      <p>
        "Prevent unauthorised transactions in your account. Update your mobile
        numbers/email IDs with your stock brokers. Receive information of your
        transactions directly from Exchange on your mobile/email at the end of
        the day. Issued in the interest of investors. KYC is one time exercise
        while dealing in securities markets - once KYC is done through a SEBI
        registered intermediary (broker, DP, Mutual Fund etc.), you need not
        undergo the same process again when you approach another intermediary."
        Dear Investor, if you are subscribing to an IPO, there is no need to
        issue a cheque. Please write the Bank account number and sign the IPO
        application form to authorize your bank to make payment in case of
        allotment. In case of non allotment the funds will remain in your bank
        account. As a business we don't give stock tips, and have not authorized
        anyone to trade on behalf of others. If you find anyone claiming to be
        part of Zerodha and offering such services, please create a ticket here.
      </p>
    </div>
      <div className="max-w-4xl mx-auto px-4 py-4 text-center text-xs text-gray-500">
        NSE | BSE | MCX | Terms & conditions | Policies & procedures | Privacy policy | Disclosure
      </div>
    </div>
    </footer>
  );
}

export default Footer;
