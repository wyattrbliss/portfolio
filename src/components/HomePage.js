import React from "react";
import Navbar from './Navbar';

function HomePage(props) {

  return (
    <div className="body">
      <Navbar />
      <div className="container homepage-content">

        <h1 className="introduction">Hi, I'm Wyatt Bliss</h1>
        <p className="intro-description"> I'm a Computer Science student at Northeastern University. I enjoy
        frontend programming, watching sports such as basketball or hockey, working on my car and
        playing video games like World of Warcraft.
        </p>
      </div>

    </div>
  )
}

export default HomePage;

// make breakpoints
