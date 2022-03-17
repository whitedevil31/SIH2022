import pic from "./assets/front-img.svg";
import './App.css';
import PageTwo from "./components/PageTwo";
import EnterOtp from "./components/enter-otp";
import Register from "./components/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// import Scan from "./components/QrCode";
function App() {
  return (
    <>

    <Router>
    <Routes>
            <Route path="/scan" element={<PageTwo />}>

            </Route>
            <Route path="/" element={<div><div><img src={pic} className = "img1" alt="logo" /></div>
          <EnterOtp></EnterOtp>
          <Register></Register> </div> }>
            </Route>
          </Routes>
    </Router>
    
    </>
  );
}

export default App;
