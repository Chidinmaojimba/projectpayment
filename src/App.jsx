import { Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import PhoneNumberAut from "./Pages/PhonenumberAut";
import Phonenumbertwo from "./Pages/Phonenumbertwo";
import Login from "./Pages/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/phoneNumberAut" element={<PhoneNumberAut />} />
      <Route path="/phoneNumbertwo" element={<Phonenumbertwo />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
