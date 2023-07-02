import React, { useState } from "react";
import Nav from "../component/navbar";

function Entrypage() {
  const [userType, setUserType] = useState(""); // State to store the selected user type

  const handleUserType = (type) => {
    setUserType(type);
    window.location.href = "/login"; // Redirect to the login page
  };

  return (
    <div>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content" style={{ background: "linear-gradient(to right, #7fd7cc, #cccccc)" }}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                User Type
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" style={{ borderBottom: "none" }}>
              <p style={{ fontSize: "28px" }}>Choose User Identity</p>
            </div>
            <div className="modal-footer" style={{ borderTop: "none", justifyContent: "center" }}>
              <button
                className="btn btn-primary btn-lg"
                style={{ background: "seagreen" }}
                onClick={() => handleUserType("freelancer")}
              >
                Freelancer
              </button>
              <button
                className="btn btn-primary btn-lg"
                style={{ background: "seagreen" }}
                onClick={() => handleUserType("client")}
              >
                Client
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entrypage;
