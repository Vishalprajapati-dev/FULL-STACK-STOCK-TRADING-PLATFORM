import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 border-top mt-5">
        <h1 className="text-center">People</h1>
      </div>
      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center ">
          <img
            src="media/passport.jpg"
            style={{ width: "60%", borderRadius: "100%" , borderBottom: "1px"}}
          />
          <h4 className="mt-4">Vishal Kumar</h4>
          <h6>Founder, Owner</h6>
          <h3></h3>
        </div>
        <div className="col-6 p-3">
          <p>
            I Am Vishal kumar Prajapati Founder Of this Clone Zerodha Web.
            Today, Zerodha has Changed the LandScape of the Indian Broking
            Industry.
          </p>
          <p>Playing Cricket in his cells.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Linkedin
            </a>
            /
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
