import React, { Component } from 'react';
import './App.css';
import About from './components/about'
import Blog from './components/blog';
import Contact from './components/contact';
import Education from './components/education';
import Experience from './components/experience';
import Header from './components/header';
import Services from './components/services';
import MainMenu from './components/mainmenu';
import Skills from './components/skills';
import Work from './components/work';
class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
          <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
          <div id="colorlib-main-menu">
            <MainMenu></MainMenu>
          </div>
          <div id="colorlib-main">
            <div id="colorlib-header">
              <Header></Header>
            </div>  
            <div id="colorlib-about">
              <About></About>
            </div>
            <div id="colorlib-education">
              <Education></Education>
            </div>
            <div id="colorlib-services">
              <Services></Services>
            </div>
            <div id="colorlib-skills">
              <Skills></Skills>
            </div>
            <div id="colorlib-experience">
              <Experience></Experience>
            </div>
            <div id="colorlib-work">
              <Work></Work>
            </div>
            <div id="colorlib-blog">
              <Blog></Blog>
            </div>
            <div id="colorlib-contact">
              <Contact></Contact>
            </div>
          </div>
      	</div>
      </div>
    );
  }
}

export default App;
