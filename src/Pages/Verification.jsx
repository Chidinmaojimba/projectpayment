import { useNavigate } from "react-router-dom";
import veri from "../assets/bluewallpaper.png";


const Verification = () => {
     const navigate = useNavigate();
    return ( <>
    <div className="container">
        <div className="inner-container">
          <div className="left-container">
            <img src={veri} alt="My veri" className="my-veri" />
          </div>
          <div className="right-container-reset">
            <div className="diagonal"></div>
            <form>
            <h1>Password Verification</h1>
             <h4>Email New Password</h4>
              <input type="email" placeholder="plus124!" />
              <h4>Confirm New Password</h4>
              <input type="text" placeholder="plus124!" />

         <button
                  className="backBttn"
                  onClick={() => navigate("/verificationtwo")}
                >
                  Reset Password
                </button>
                </form>
 
          </div>
        </div>
      </div>
    </> );
}
 
export default Verification;