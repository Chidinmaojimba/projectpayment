import veri from "../assets/bluewallpaper.png";
import boxmark from "../assets/box.png";

const verificationtwo = () => {
    return ( <>

    <div>
            <div>
              <div className="container">
                <div className="inner-container">
                  <div className="left-container">
                    <img src={veri} alt="My veri" className="my-veri" />
                  </div>
    
                  <div className="right-container">
                    <div className="diagonal"></div>
                     <h1>
                          Password Verification
                        </h1>
                    <form>
                      <div className="heading">
                        {/* <button className="ring-btn">
                          {" "}
                          <img src={arrow} alt="arrow" className="arrow" />
                        </button> */}

                      </div>
    
                      <div className="boxmark-container" >
                        <img src={boxmark} alt="boxmark" className="boxmark" />
                      </div>
                      <div className="pha">
                        <h3>
                          Password Verification<br></br> successful
                        </h3>
                      </div>
    
                      <button
                        className="backBttn"
                        // onClick={() => navigate("/login")}
                      >
                        Login
                      </button>
                
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </> );
}
 
export default verificationtwo;