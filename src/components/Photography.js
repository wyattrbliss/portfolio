import React from "react";
import Navbar from './Navbar';
import PhotoGallery from './PhotoGallery';

function Photography(props) {
  return (
    <div className="body photography">
      <Navbar />
      <PhotoGallery />
    </div>
  )
}

export default Photography;
