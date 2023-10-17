import React, { useState } from "react";

function Navbar() {
  const [mobile, setMobile] = useState(false);

  function handleHamburguer() {
    setMobile(!mobile);
    console.log(mobile);
  }

  return (
    <div className="nav-bar">
      <button className="hamburguer" onClick={handleHamburguer}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
      <nav className={mobile ? "nav-container active" : "nav-container"}>
        <span className="logo">
          <a href="https://github.com/FabianeElla">{"<Fabiane />"}</a>
        </span>

        <ul>
          <li>
            <a href="#home-link">home</a>
          </li>
          <li>
            <a href="#sobre-link">sobre</a>
          </li>
          <li>
            <a href="#skills-link">skills</a>
          </li>
          <li>
            <a href="#portfolio-link">portfolio</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
