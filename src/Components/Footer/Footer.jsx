import React from 'react'
import './Footer.css'
import footer_logo from "../../assets/Footer.png"
import user_logo from "../../assets/user_icon.svg"
const Footer = () => {
  return (
    <div className="footer" id='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={footer_logo} alt=''/>
            <p>I'm a passionate MERN Stack Developer with 1 year of hands-on experience building responsive, full-stack web applications.</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_logo} alt=''/>
                <input type='email' placeholder='enter your email id'/>
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2025 Santhoshkumar. All Rights Reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
