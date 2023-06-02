import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import OurTeam from "./pages/OurTeam";
import ContactUs from "./pages/ContactUs";
// import Login from "./Components/login";
import AboutUs from "./pages/AboutUs";
import Footer from "./Components/Footer";
import Play from "./Components/play";

export default function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Team" element={<OurTeam />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/play" element={<Play />} />
        </Routes>
        <Footer />
      </>
    </div>
  );
}