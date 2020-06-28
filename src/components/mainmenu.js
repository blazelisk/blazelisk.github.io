import React, { Component } from 'react'

export default class MainMenu extends Component{
    render() {
      return (
        <aside id="colorlib-aside" className="border js-fullheight" style={{height: '100%'}}>
          <div className="text-center">
            <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
            <h1 id="colorlib-logo"><a href="index.html">Benjamin Bui</a></h1>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li className="active"><a href="#" data-nav-section="home">Home</a></li>
                <li><a href="#about" data-nav-section="about">About</a></li>
                <li><a href="#education" data-nav-section="education">Education</a></li>
                {/* <li><a href="#" data-nav-section="services">Services</a></li>
                //<li><a href="#" data-nav-section="skills">Skills</a></li> */}
                <li><a href="#experience" data-nav-section="experience">Experience</a></li>
                {/* //<li><a href="#" data-nav-section="work">Work</a></li>
                //<li><a href="#" data-nav-section="blog">Blog</a></li> */}
                <li><a href="#" data-nav-section="contact">Contact</a></li>
              </ul>
            </div>
          </nav>
          <div className="colorlib-footer" >
            <p><small>© {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © 2020 All rights reserved | This layout was made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib </a> 
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                | Website written in React and hosted on <a href="https://github.com/blazelisk/blazelisk.github.io" target="_blank" rel="noopener noreferrer" >GitHub Pages</a>  </small></p>
          </div>
        </aside>
      );
    }
  };
