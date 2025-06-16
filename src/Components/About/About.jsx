import React from 'react'
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/profile_logo.jpg"
const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt=''/> 
        </div>
      <div className="about-section">
        <div className="about-left">
           <img src={profile_img} alt=''/>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, tempora! Quos temporibus dolores quod neque numquam iste mollitia alias beatae!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestias consectetur dolorum ipsum vitae porro, sequi quam corrupti dolorem dolore!</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{width:"70%"}}/>

            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{width:"80%"}}/>

            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{width:"75%"}}/>

            </div>
            <div className="about-skill">
              <p>Node Js</p>
              <hr style={{width:"70%"}}/>

            </div>
            <div className="about-skill">
              <p>Mongo DB</p>
              <hr style={{width:"70%"}}/>

            </div>
          </div>
        </div>
      </div>
      <div className='about-achievements'>
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className="about-achievement">
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr/>
      <div className="about-achievement">
          <h1>5+</h1>
          <p>ON PROCESS...</p>
        </div>
      
      </div>
    </div>
  )
}

export default About
