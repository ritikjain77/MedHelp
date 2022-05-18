import "../src/styles/App.css";
import WithNav from "./components/WithNav";
import WithoutNav from "./components/WithoutNav";
import Home from "./components/Home";
import BookAppoint from "./components/BookAppointment";
import Charity from "./components/Charity";
import Discuss from "./components/DiscussForum";
import Faq from "./components/FAQ";
import Register from "./components/Register";
import Login from "./components/Login";
//import Background from "./components/Background";
import BloodDonate from "./components/BloodDonation";
import OrganDonate from "./components/OrganDonation";
import Appoint from "./components/Appoint";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Background /> */}
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/appointment" element={<Appoint />}></Route>
            <Route path="/bookappoint" element={<BookAppoint />}></Route>
            <Route path="/blooddonation" element={<BloodDonate />}></Route>
            <Route path="/organdonation" element={<OrganDonate />}></Route>
            <Route path="/charity" element={<Charity />}></Route>
            <Route path="/discuss" element={<Discuss />}></Route>
            <Route path="/faq" element={<Faq />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
