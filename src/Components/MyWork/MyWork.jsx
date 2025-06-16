import React from 'react'
import "./MyWork.css"
import themePattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const MyWork = () => {
  return (
   <div className="mywork" id='work'>
    <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={themePattern} alt=''/>
    </div>
    <div className="mywork-container">
        {mywork_data.map((work, index) => (
    <div key={index} className="mywork-item">
      <img src={work.w_img} alt={work.w_name} />
       <h3>{work.w_name}</h3>
        <p className="mywork-desc">{work.w_desc}</p>
      <div className="mywork-buttons">
        <a href={work.live_link} target="_blank" rel="noopener noreferrer" className="mywork-btn">Live App</a>
        <a href={work.w_link} target="_blank" rel="noopener noreferrer" className="mywork-btn">GitHub</a>
      </div>
    </div>
  ))}
    </div>
  
        <a 
  href="https://github.com/SanthoshKumar211299" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="mywork-showmore"
>
        <p>Show More</p>
        <img src={arrow_icon} alt=''/>
    </a>
    
   </div>
  )
}

export default MyWork
