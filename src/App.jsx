import { Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import PhoneNumberAut from "./Pages/PhonenumberAut";
import Phonenumbertwo from "./Pages/Phonenumbertwo";
import Login from "./Pages/Login";
import Reset from ".Pages/Reset";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/phoneNumberAut" element={<PhoneNumberAut />} />
      <Route path="/phoneNumbertwo" element={<Phonenumbertwo />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset" element={<Reset />} />

    </Routes>
  );
};

export default App;
