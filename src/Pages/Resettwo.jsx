import reset from "../assets/reset.png";
import "../Styles/Reset.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
//import ResetPopup from "./Component/ResetPopup"

const Resettwo = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => { 
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <>
      <div className="container">
        <div className="inner-container">
          <div className="left-container">
            <img src={reset} alt="My reset" className="my-reset" />
          </div>

          <div className="right-container-reset">
            <div className="diagonal"></div>

            <h1>Reset Password</h1>

            <p>
              To reset your password, enter your email address to get the reset
              link
            </p>

            <form onSubmit={handleSubmit}>
              <h4>Email Address</h4>
              <input
                type="email"
                placeholder="ucheobikingsley@gmail.com"
                required
              />

              <button type="submit">Reset Password</button>
            </form>

            <button
              className="backBttn"
              onClick={() => navigate("/login")}
            >
              Back to Login
            </button>

            <ResetPopup
              isOpen={showPopup}
              onClose={() => setShowPopup(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resettwo;
