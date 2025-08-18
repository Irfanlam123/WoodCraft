// src/Router.jsx
import { Route, Routes } from "react-router-dom";
import Home from "./src/Pages/Home/Home";
import About from "./src/Pages/About/About";
import BookNow from "./src/Pages/Contact/BookNow";
import Services from "./src/Pages/Services/Services";
import Gallery from "./src/Pages/gallery/Gallery";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/BookNow" element={<BookNow />} />{" "}
      <Route path="/bookings" element={<BookNow />} /> {/* Add this alias */}
    </Routes>
  );
}

export default Routers;
