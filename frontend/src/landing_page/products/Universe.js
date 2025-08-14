
import React from 'react';

function Universe() {
     
       return (

        <div className="container mt-5 ">
      <div className="row text-center">
     <h1>The Zerodha Universe</h1>
    <p>Extend your trading and investment experience even further with our partner platform</p>
       
        <div className="col-4 p-3 mt-5">
          <img src="media/smallcaseLogo.png" />
          <p className='text-small text-muted'>Thematic investment platform</p>
        </div>

         <div className="col-4 p-3 mt-5">
        <img src="media/streakLogo.png" style={{width: "180px"}}/>
          <p className='text-small text-muted'>Algo & stratey platform</p>
        
        </div>

         <div className="col-4 p-3 mt-5">
       <img src="media/sensibullLogo.svg" style={{width: "180px"}}/>
          <p className='text-small text-muted'>Option trading platform</p>
        </div>

         <div className="col-4 p-3 mt-5">
          <img src="media/zerodhaFundhouse.png" style={{width: "200px"}}/>
          <p className='text-small text-muted'>Asset management</p>
        </div>

         <div className="col-4 p-3 mt-5">
        <img src="media/goldenpiLogo.png" style={{width: "180px"}}/>
          <p className='text-small text-muted'>Bonds trading platform platform</p>
        </div>
         <div className=" mb-4 col-4 p-3 mt-5">
       <img src="media/dittoLogo.png" style={{width: "130px"}}/>
          <p className='text-small text-muted'>Insurance</p>
        </div>
      
        <button className='p-2 btn btn-primary fs-6'style={{width:"13%" , margin:"0 auto"}}>Sign up now</button>
      </div>
    </div>
  ) 
}

export default Universe;