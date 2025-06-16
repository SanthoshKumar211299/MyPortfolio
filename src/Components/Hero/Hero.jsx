import React from 'react'
import "./Hero.css"
import profileImg from "../../assets/profile_logo.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div className='hero' id='home'>
        <img src={profileImg} alt=''/>
        <h1><span>i'm Santhoshkumar,</span>Mern Stack Developer based in India</h1>
        <p>I'm a passionate MERN Stack Developer with 1 year of hands-on experience building responsive, full-stack web applications. I specialize in creating dynamic user interfaces with React.js, building powerful REST APIs using Node.js and Express.js, and managing data with MongoDB.</p>
         <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>

         </div>
    </div>
  )
}

export default Hero
