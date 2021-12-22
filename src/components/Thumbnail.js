import React, { Component }  from 'react';
import { Link } from 'react-router-dom';

function Thumbnail(props) {
  return (
    <div className="thumbnail">
      <a href={props.link}>
        <div className="thumbnail-image">
          <img className ="project-image" src={props.image} alt="Thumbnail Image"/>
        </div>
        <div className="thumbnail-title">{props.title}</div>
        <div className="thumbnail-category">{props.category}</div>
      </a>
    </div>
  )
}

export default Thumbnail;
