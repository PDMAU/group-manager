import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown";
import React from "react";

function Header(props) {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <h3 className="navbar-brand text-light" href="#">
          {props.text}
        </h3>        
      </div>
    </nav>
  );
}

export default Header;
