import React from "react";
import Navbar from './Navbar';
import Thumbnail from './Thumbnail';

function Projects(props) {
  return (
    <div className="body">
      <Navbar />
      <div className="thumbnail-container">
        <Thumbnail
          link=""
          image=""
          title="Maze Game"
          category="java project"
        />
        <Thumbnail
          link=""
          image=""
          title="animator"
          category="java project"
        />
        <Thumbnail
          link=""
          image=""
          title="recipe collaborator"
          category="react project"
        />
      </div>
    </div>
  )
}

export default Projects;
