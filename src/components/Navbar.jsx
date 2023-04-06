import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.scss'
// import { Style } from 'util';

function ResponsiveAppBar() {
  return (
  <>
    <header id="nav-wrapper">
    <nav id="nav">
      <div className="nav navlr left">
        <span className="gradient skew"><h1 className="logo un-skew"><a href="#home">Video Organiser</a></h1></span>
        <button id="menu" className="btn-nav logoBtn button-Navbar"><span className="fas fa-bars"></span></button>
      </div>
      <div className="nav navlr right">
        <a href="#History" className="nav-link-Navbar "><span className="nav-link-Navbar-span"><span className="u-nav">Home</span></span></a>
        <a href="#Home" className="nav-link-Navbar"><span className="nav-link-Navbar-span"><span className="u-nav">History</span></span></a>
        {/* <a href="#work" className="nav-link-Navbar"><span className="nav-link-Navbar-span"><span className="u-nav">Work</span></span></a>
        <a href="#contact" className="nav-link-Navbar"><span className="nav-link-Navbar-span"><span className="u-nav">Contact</span></span></a> */}
      </div>
    </nav>
  </header>
  

  </>
  )
}
export default ResponsiveAppBar;