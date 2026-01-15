import reset from "../assets/reset.png";
import "../Styles/Reset.css";
import { useNavigate } from "react-router-dom";


const Reset = () => {
  const navigate = useNavigate();
    return (
         <>
          <div className="container">
                  <div className="inner-container">
                    <div className="left-container">
                      <img src={reset} alt="My reset" className="my-reset" />
                    </div>
                    <div className="right-container-reset">
                     
                      <div className="diagonal"></div>

                    <h1>
                      Reset Password
                    </h1>

                    <p>
                       To reset your password, enter your email address to get the reset link
                    </p>

                    <h4>Email Address</h4>
              <input type="email" placeholder="ucheobikingsley@gmail.com" />

              <p>Check your email address to reset the password</p>

              <button
                    className="backBttn"
                    onClick={() => navigate("/resettwo")}
                  >
                    Create Account
                  </button>


                  </div>
                      </div>
                      </div>
                      

        </> );
}
 
export default Reset;