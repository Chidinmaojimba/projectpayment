import { Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import PhoneNumberAut from "./Pages/PhonenumberAut";
import Phonenumbertwo from "./Pages/Phonenumbertwo";
import Login from "./Pages/Login";
import Reset from "./Pages/Reset";
import Resettwo from "./Pages/Resettwo";
import Verification from "./Pages/Verification";
import Verificationtwo from "./Pages/Verificationtwo";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/phoneNumberAut" element={<PhoneNumberAut />} />
      <Route path="/phoneNumbertwo" element={<Phonenumbertwo />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/resettwo" element={<Resettwo />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/verificationtwo" element={<Verificationtwo />} />
    </Routes>
  );
};

export default App;
