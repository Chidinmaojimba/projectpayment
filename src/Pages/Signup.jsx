import blue from "../assets/blueframe1.png";
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const navigate = useNavigate();
    return ( 
        <div>
          <div className="container">
                <div className="inner-container">
                        <div className="left-container">
                            <img src={blue} alt="My blueframe1" className="my-blueframe"/>
                        </div>
                        <div className="right-container">
                            {/* <h1>Create an account</h1> */}
                        
                         <div className="auth-card">
                            
                         <form>

                        
             
                          <h1>Create an account</h1>
                           <div className="row">
                            <div className="row-write">
                            <h4>First Name</h4>               
                            <input type="text" placeholder="First Name"/>
                             </div>
                             <div className="row-write">
                            <h4>Last Name</h4>
                            <input type="text" placeholder="Last Name"/>
                            </div>
                            </div>
                             <h4>Email Address</h4>
                            <input type="email" placeholder="Email address"/>
                            <h4>Mobile number</h4>
                            <input type="text" placeholder="Mobile No"/>
                            <h4>Password</h4>
                            <input type="password" placeholder="Pluss124"/>
                            <p>Use 8 or more characters with a mix of numbers, letters & symbols    </p>

                            {/* <button>Create Account</button> */}

                            <button  className="backBttn" onClick={() => navigate("/phoneNumberAut")}>
                            Create Account
                            </button>
                            <p className="login">Already have an account?<a href="">Sign in</a></p>

                         </form>

                         </div>

                        </div>
                </div>
          </div>
        </div>
     );
}
 
export default Signup;