// src/Router.jsx
import { Route, Routes } from "react-router-dom";
import Home from "./src/Pages/Home/Home";
import About from "./src/Pages/About/About";
import BookNow from "./src/Pages/Contact/BookNow";
import Services from "./src/Pages/Services/Services";



function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/BookNow" element={<BookNow />} />{" "}
    </Routes>
  );
}

export default Routers;