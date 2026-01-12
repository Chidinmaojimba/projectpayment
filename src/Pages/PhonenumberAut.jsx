import visa from "../assets/visacard.png";
import authimg from "../assets/authimg.png";
import arrow from "../assets/arrow_back.png";
import { useNavigate } from "react-router-dom";

const PhoneNumberAut = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className="container">
          <div className="inner-container">
            <div className="left-container">
              <img src={visa} alt="My visacard" className="my-visacard" />
            </div>

            <div className="right-container">
              <div className="diagonal"></div>
                   <h1>
                    Phone Number<br></br> Authentication
                  </h1>
              <form>
                <div className="heading">
                  <button className="ring-btn">
                    {" "}
                    <img src={arrow} alt="arrow" className="arrow" />
                  </button>
                  
                    

                </div>

                <div>
                  <img src={authimg} alt="authimg" className="authimg" />
                </div>
                <h6>SMS sent</h6>
                <p>
                  Please enter the code sent to <span>070315489</span>
                </p>
                <div className="fill-password">
                  <div className="row-write">
                    <p>7</p>
                    {/* <div></div> */}
                  </div>
                  <div className="row-write">
                    <p>9</p>
                    {/* <div></div> */}
                  </div>
                  <div></div>
                  <div></div>
                </div>
                <br></br>

                <button
                  className="backBttn"
                  onClick={() => navigate("/phoneNumbertwo")}
                >
                  Verify
                </button>
                <p className="login">
                  Didn’t get any code?<a href="">Resend code</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneNumberAut;
