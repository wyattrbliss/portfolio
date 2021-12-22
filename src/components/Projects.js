import React from "react";
import Navbar from './Navbar';
import Thumbnail from './Thumbnail';
import AnimatorImage from '../images/animator.JPG';
import MazeImage from '../images/mazegame.JPG';
import BambooImage from '../images/bamboo.JPG';
import LotteryImage from '../images/mobilelottery.JPG';

function Projects(props) {
  return (
    <div className="body">
      <Navbar />
      <div className="thumbnail-container">
        <div className="project-col">
          <div class="col-sm project-item">
            <Thumbnail
              link="https://github.com/wyattrbliss/"
              image={MazeImage}
              title="Maze Game"
              category="Java project"
            />
          </div>
          <div class="col-sm project-item">
            <Thumbnail
              link="https://github.com/wyattrbliss/"
              image={AnimatorImage}
              title="animator"
              category="Java project"
            />
          </div>
          <div class="col-sm project-item">
            <Thumbnail
              link="https://mobilelottery.com"
              image={LotteryImage}
              title="Mobile Lottery"
              category="WordPress project"
            />
          </div>
          <div class="col-sm project-item">
            <Thumbnail
              link=""
              image={BambooImage}
              title="Bamboo Sheets"
              category="React/TypeScript project"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
