import "./App.css";
import WithNav from "./components/WithNav";
import WithoutNav from "./components/WithoutNav";
import Home from "./components/Home";
import BookApp from "./components/BookAppointment";
import SearchNear from "./components/SearchNearby";
import Donation from "./components/Donation";
import Charity from "./components/Charity";
import Discuss from "./components/DiscussForum";
import Faq from "./components/FAQ";
import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/bookappoint" element={<BookApp />}></Route>
            <Route path="/searchnearby" element={<SearchNear />}></Route>
            <Route path="/donate" element={<Donation />}></Route>
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
