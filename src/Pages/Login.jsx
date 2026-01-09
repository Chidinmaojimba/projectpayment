import { useNavigate } from "react-router-dom";
import lappy from "../assets/lappy.png";
import google from "../assets/google2.png";
import facebook from "../assets/goog.png";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        <div className="inner-container">
          <div className="left-container">
            <img src={lappy} alt="My lappy" className="my-lappy" />
          </div>
          <div className="right-container">
            <div className="diagonal"></div>

            <form>
              <h1>Login to your Account</h1>
              <p className="subtitle">Welcome back! Select method to log in</p>

              <div className="social-login">
                <button className="social-google">
                  {" "}
                  <img src={google} alt="My google" className="my-google" />
                  Google
                </button>
                <button className="social-facebook">
                  {" "}
                  <img src={facebook} alt="My google" className="my-google" />
                  Facebook
                </button>
              </div>

              <div className="divider"> or login with</div>

              {/* <div className="row">
                                  <div className="row-write">
                                  <h4>First Name</h4>               
                                  <input type="text" placeholder="First Name"/>
                                   </div>
                                   <div className="row-write">
                                  <h4>Last Name</h4>
                                  <input type="text" placeholder="Last Name"/>
                                  </div>
                                  </div> */}
              <h4>Email Address</h4>
              <input type="email" placeholder="ucheobikingsley@gmail.com" />

              <h4>Password</h4>
              <input type="password" placeholder="Pluss124" />
              <p>
                Agree with <a href="">Terms & Conditions</a> and{" "}
                <a href="">Privacy Policy</a>.{" "}
              </p>

              {/* <button>Create Account</button> */}

              <button
                className="backBttn"
                onClick={() => navigate("/phoneNumberAut")}
              >
                Create Account
              </button>
              <p className="login">
                Already have an account?<a href="">Sign in</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
