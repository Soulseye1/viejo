import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { About } from "./components/About";
import { Events } from "./components/Events";
import { Merch } from "./components/Merch";
import ViejoMenuApp from "./ViejoMenuApp";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ViejoMenuApp />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/merch" element={<Merch />} />
      </Routes>
    </Router>
  );
}

export default App;
