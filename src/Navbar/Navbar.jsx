import React, { useState } from 'react';

import  './Navbar.css';



const NavbarX = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== '') {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (

<div>
    <div className="scale-in-hor-center">
    <div id="xzz">
      <div className="navbarHead">
        <nav id="navbarId" className="navbar navbar-expand-lg navbar-light ">
          <a id="navbarHedding" className="navbar-brand heartbeat" href="/#">

      Thought Of The Day      
          </a>
          <button
            id="buttonId"
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a id="Home-link" className="nav-link" href="/">
                Live Location <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a id="Home-link" className="nav-link" href="tel:+919984371762">
                  Call Me
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  id="Home-link"
                  className="nav-link dropdown-toggle"
                  href="/#"
                    id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Contact Me On
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="mailto:dikshantyadav2026@gmail.com">
                    Gmail
                  </a>
                  <a className="dropdown-item" href="https://wa.link/5rp8oa">
                    WhatsApp
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/#">
                    Instagram
                  </a>
                </div>
              </li>
              <li id="Home-linkk" className="nav-item">
                <a className="nav-link disabled  color-change-2x " href="/#">
                  Only For Devloper 🌹🌹
                </a>
              </li>
            </ul>
            <form onSubmit={handleSearchSubmit} className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Google Search "
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">

Search

                
              </button>
            </form>
          </div>
        </nav>
      </div>
    </div>
  </div>
</div>
  );
};

export default NavbarX;