import React, { useContext} from 'react'
import './Experience.css'
import {themeContext} from '../../Context';

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id='experience'>
      <div className="left" style={{display: 'flex',gap: '4rem'}}>    
          <div className="achievement">
              <div className="circle" style={{color: darkMode?'var(--orange)':''}}>1+</div>
              <span style={{color: darkMode?'white':''}}>Years</span>
              <span>Experience</span>
          </div>
          <div className="achievement">
              <div className="circle" style={{color: darkMode?'var(--orange)':''}}>20+</div>
              <span style={{color: darkMode?'white':''}}>completed</span>
              <span>Projects</span>
          </div>
          <div className="achievement">
              <div className="circle" style={{color: darkMode?'var(--orange)':''}}>1</div>
              <span style={{color: darkMode?'white':''}}>companies</span>
              <span>work</span>
          </div>
      </div>
      <div className="right">
        <span style={{display: 'flex', justifyContent: 'center'}}>Skills</span>
          <ul style={{listStyle:'none',display: 'flex',gap: '2rem'}}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Node.Js</li>
            <li>Express.Js</li>
            <li>React.Js</li>
          </ul>
          <div className="blur blur-2" style={{background:'var(--purple)'}}></div>
      </div>
    </div>
  )
}

export default Experience