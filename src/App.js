import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from 'react-router-dom';

// useNavigate is used for specifying which route to use
// useNavigate needs to be wrapped by a router, in the root.render in index.js put <Router> </Router>

export default function App(){
  
  const navigate = useNavigate();

  function clickToNavigate(event){
    console.log("event =>", event)
    navigate(event.target.name)
  }

  return(
    <React.Fragment>
      <nav className="navbar navbar-expand-md bg-light">
      <ul className="navbar">
        <li className="nav-item ms-4">
          <Link to="/page1" name="/page1" className="nav-link" onClick={(evt) => clickToNavigate(evt)}> Page 1 </Link>
        </li>
        <li className="nav-item ms-4">
          <Link to="/page2" name="/page2" className="nav-link" onClick={(evt) => clickToNavigate(evt)}> Page 2 </Link>
        </li>
        <li className="nav-item ms-4">
          <Link to="/page3" name="/page3" className="nav-link" onClick={(evt) => clickToNavigate(evt)}> Page 3 </Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/page1" element={<Page1/>} />
      <Route path="/page2" element={<Page2/>} />
      <Route path="/page3" element={<Page3/>} />
    </Routes>
    </React.Fragment>
      
  )
}
