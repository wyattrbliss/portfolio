import React, { useState } from "react";
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector, connect} from 'react-redux';
import { updateSelected } from '../state/actions/selected';

function Navbar(props) {

  const selected = useSelector(state => state.PortfolioData.selected);
  console.log(selected);
  const dispatch = useDispatch();
  const links = ['home', 'about', 'resume', 'projects', 'photography'];


  return (
    <nav className="navbar justify-content-center navbar-expand-lg navbar-dark
      bg-transparent">
      <div className="container nav-container">
        {
          links.map(link => {
            const url = link === 'home' ? '/': '/' + link;
            var lower = link;
            return (
              <div className="navbar-item col-2 justify-content-center">
                <Link className={`navbar-brand navbar-item justify-content-center
                  ${selected == link ? 'selected': ''}`}
                  id={link}
                  to={url}
                  onClick={() => dispatch(updateSelected(link))}>
                  <b>
                    {lower.toUpperCase()}
                  </b>
                </Link>
              </div>
            )
          })
        }
      </div>
    </nav>
  )
}

export default Navbar;
