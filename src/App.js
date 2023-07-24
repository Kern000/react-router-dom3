import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import "bootstrap/dist/css/bootstrap.min.css"

export default function App(){
  return(
  <Router>
    <nav className="navbar navbar-expand-md bg-light">
      <ul className="navbar">
        <li className="nav-item ms-4">
          <Link to="/page1" className="nav-link"> Page 1 </Link>
        </li>
        <li className="nav-item ms-4">
          <Link to="/page2" className="nav-link"> Page 2 </Link>
        </li>
        <li className="nav-item ms-4">
          <Link to="/page3" className="nav-link"> Page 3 </Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/page1" element={<Page1/>} />
      <Route path="/page2" element={<Page2/>} />
      <Route path="/page3" element={<Page3/>} />
    </Routes>
  </Router>
  )
}
