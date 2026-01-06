import visa from  "../assets/visacard.png";
import keyblue from "../assets/keyblue.png";
import arrow from "../assets/arrow_back.png";  
import { useNavigate } from "react-router-dom"; 

const Phonenumbertwo = () => {
    const navigate = useNavigate();
    return ( <>
        <div>
                <div>
                        <div className="container">
                                <div className="inner-container">
                                        <div className="left-container">
                                          <img src={visa} alt="My visacard" className="my-visacard"/>
                                        </div>
                                        
                                        <div className="right-container">
<div className="diagonal"></div>
                                           
                                          <form>
                                            
                                           <div className="heading">
                                            
                                       <button className="ring-btn" >    <img src={arrow} alt="arrow" className="arrow"/></button>
                                           <h1>Phone Number<br></br> Authentication</h1>
                                           </div>

    
                                
                                           <div>
                                           <img src={keyblue} alt="keyblue" className="keyblue"/>
                                           </div>
                                           <div className="pha">
                                           <h3>Phone Number Authentication<br></br> successful</h3>
                                           </div>
                                          
                                          
                                
                                    <button  className="backBttn" onClick={() => navigate("/login")}>
                            Create Account
                            </button>
                                            <p className="login">Didn’t get any code?<a href="">Resend code</a></p>
                                            </form>
                                        </div>
                                 </div>
                        </div>
                </div>
        
            </div>
    </> );
}
 
export default Phonenumbertwo;