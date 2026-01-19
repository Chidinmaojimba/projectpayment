import reset from "../assets/reset.png";
import "../Styles/Reset.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "flowbite-react";

const Resettwo = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [open, setOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <>
      <div className="container">
        <Modal
          show={open}
          onClose={() => setOpen(false)}
          className="modal-overlay"
        >
          <div className="modal-box">
            <ModalHeader>
              <div className="modal-header">
                <h3>Reset Password</h3>
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="modal-body">
                <p>Check your email to reset your password</p>
              </div>
              <div>
                <button onClick={() => setOpen(!open)}>Close</button>
              </div>
            </ModalBody>
          </div>
        </Modal>
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

            <form>
              <h4>Email Address</h4>
              <input
                type="email"
                placeholder="ucheobikingsley@gmail.com"
                required
              />
            <button className="backBttn" onClick={() => setOpen(!open)}>Create Account</button>  
            <button
                  className="backBttn"
                  onClick={() => navigate("/verification")}
                >
                  Verify
                </button>
            </form>
              


          </div>
        </div>
      </div>
    </>
  );
};

export default Resettwo;
