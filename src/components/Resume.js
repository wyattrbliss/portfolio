import React from "react";
import Navbar from './Navbar';

function Resume(props) {
  return (
    <div className="body resume">
      <Navbar />
        <iframe frameborder="0" scrolling="no"
          width="100%" height="100%"
          src="https://drive.google.com/file/d/1KaRAVrtOUCt4dWT33J44hZ8R1b34Q4hh/preview">
        </iframe>
    </div>
  )
}

export default Resume;
