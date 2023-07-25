// import React, useState and Link from react-router-dom
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

// define a function component called NavBar
function NavBar() {
  // use a state variable to track the visibility of the sub menu
  const [showSubMenu, setShowSubMenu] = useState(false);



  // define a function to toggle the sub menu visibility
  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  // return the JSX for the nav bar
  return (
    // use a nav element with a class name of navbar
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/transaction" className="navbar-link">
            Transaction
          </Link>
        </li>

     {   <li>
          <Link to="/welding" className="navbar-link">
            Welding Summary
          </Link>
        </li> }



        {   <li>
          <Link to="/chart" className="navbar-link">
            Charts
          </Link>
        </li> }



        {   <li>
          <Link to="/salechart" className="navbar-link">
            SalesChart
          </Link>
        </li> }


        <li>
          <Link to="/exampleGrid" className="navbar-link">
            Data Grid
          </Link>
        </li>

        <li>
          <Link to="/searchCard1" className="navbar-link">
            Card-01
          </Link>
        </li>

        <li>
          <Link to="/contactForm" className="navbar-link">
            Grid
          </Link>
        </li>

  
        <li>



        <li>
          <Link to="/searchCard" className="navbar-link">
          Card
          </Link>
        </li>


    

  
        <li>
          <Link to="/dymanicForm" className="navbar-link">
            Dynamic Form
          </Link>
        </li>


        <li>
          <Link to="/dymanicButton" className="navbar-link">
            Dynamic Button
          </Link>
        </li>
   
          <div className="navbar-link1" onClick={toggleSubMenu}>
            Settings
          </div>
        
          {showSubMenu && (
            // use an unordered list with a class name of submenu-list
            <ul className="submenu-list">
           
              <li>
                <Link to="/signin" className="submenu-link" onClick={toggleSubMenu}>
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/signout" className="submenu-link" onClick={toggleSubMenu}>
                  Sign Out
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

// export the NavBar component
export default NavBar;


