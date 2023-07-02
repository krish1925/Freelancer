import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function Nav() {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleRegisterModal = () => {
    setShowRegisterModal(!showRegisterModal);
    alert("Register user clicked");
  };

  const handleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
    alert("Login user clicked");
  };
  const handleLogout = () => {
    setShowLoginModal(!showLoginModal);
    alert("Logout user clicked");
    window.location.href = "http://localhost:3000/login";
  };
  

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <h1 style={{ color: 'lightseagreen' }}>Freelancer</h1>
        <div className="d-flex">
          <button type="button" className="btn btn-outline-info my-2 my-sm-0"onClick={handleRegisterModal}>
            Register User
          </button>
          <button type="button" className="btn btn-outline-info my-2 my-sm-0" onClick={handleLoginModal}>
            Log In
          </button>
          <button href = 'http://localhost:3000/login' type="button" onClick={handleLogout}  className="btn btn-outline-info my-2 my-sm-0">Log Out</button>
        </div>
      </div>

      {/* Register User Modal */}
      {showRegisterModal && (
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          {/* Modal content */}
        </div>
      )}

      {/* Log In Modal */}
      {showLoginModal && (
        <div
          className="modal fade"
          id="exampleModal1"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel1"
          aria-hidden="true"
        >
          {/* Modal content */}
        </div>
      )}
    </nav>
  );
}

export default Nav;
