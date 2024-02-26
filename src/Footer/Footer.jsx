import React from 'react';
import './Footer.css';

// Define the Footer component
function Footer() {
  return (
    <footer>

      <div className="flicker-1"> 
        {/* This is a container for the 'thought of the day' */}
        <p> thought of the day </p>
      </div>

      <div>
        {/* Links to YouTube, WhatsApp Group, and Email */}
        <p>
          <a className="YouFoot" href="/#">👉 Join YouTube</a>
        </p>
        <p>
          <a className="YouFoot" href="https://wa.link/5rp8oa">👉 Join WhatsApp</a>
        </p>
        <p> 
          <a className="YouFoot" href="mailto:dikshantyadav2026@gmail.com">👉 Mail Me </a> 
        </p>
      </div>

      <div className="botfoot">
        {/* Display the current date */}
        <p> {new Date().toDateString()}</p>

        {/* Copyright information */}
        <p className="flicker-5">&copy; DK Development</p>
      </div>
    </footer>
  );
}

export default Footer; // Make sure to export the component here
