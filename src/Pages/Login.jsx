import { useNavigate } from "react-router-dom";
import lappy from "../assets/lappy.png";
import google from "../assets/google2.png";
import facebook from "../assets/goog.png";
import { Link } from "react-router-dom";


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
               <h1>Login to your Account</h1>
            <form>
              
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
                      
              <h4>Email Address</h4>
              <input type="email" placeholder="ucheobikingsley@gmail.com" />

              <h4>Password</h4>
              <input type="password" placeholder="Pluss124" />


              

                  {/* <p className="forgotPassword">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/reset");
                      }}
                    >
                      Forgot password
                    </a>
                  </p> */}

                 

<p className="forgotPassword">
  <Link to="/login">Forgot password</Link>
</p>





              {/* <p className="forgotPassword"><a href="">Forgot password</a></p> */}
              <p>
                Agree with <a href="">Terms & Conditions</a> and{" "}
                <a href="">Privacy Policy</a>.{" "}
              </p>


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
