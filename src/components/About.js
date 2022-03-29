import React from "react";
import Navbar from './Navbar';
import Headshot from '../images/headshot.JPG';

function About() {
  return (
    <div className="body">
      <Navbar />
      <div className="about-body">
        <div className="row d-flex container about-content">
          <div className="col-sm">
            <img src={Headshot} width="400"/>
          </div>
          <div className="col-sm about-paragraph">
            <h2>Here's a little more about me</h2>
            <p>
              My name is Wyatt Bliss.
              I'm from Las Vegas, NV, but moved to St. Paul, MN when I was 11 years old.
              I graduated from Saint Paul Academy and Summit School in 2017, and
              later that year I spent my first semester of college abroad in Berlin, Germany
              as a part of Northeastern University's NUin program.
              I received a Bachelor's degree in Computer Science from Northeastern in Dec. 2021.
              I love working in Python and TypeScript/JavaScript webpages using the React framework.
              In my spare time, you can find me driving my car through the winding backroads
              of Jamaica Plain, or playing with my friends online in the newest Steam games.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
