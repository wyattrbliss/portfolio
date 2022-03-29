import React from "react";
import Navbar from './Navbar';

function HomePage() {

  return (
    <div className="body homepage">
      <Navbar />
      <div className="container homepage-content">
        <h1 className="introduction">Hi, I'm Wyatt Bliss</h1>
        <p className="intro-description"> I'm a recent graduate and web developer. I enjoy
          frontend programming, watching or playing sports such as basketball, and
          playing video games with my friends.
        </p>
      </div>
    </div>
  )
}

export default HomePage;

// make breakpoints
