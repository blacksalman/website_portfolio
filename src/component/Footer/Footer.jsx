import React from 'react';
import './Footer.css'
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github';

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{ width: "100%" }} />
        <div className="f-content">
            <span>salman51180189@gmail.com</span>
            <div className="f-icons">
               <a href="https://www.instagram.com/black_bear_0/">
                   <Insta color='white' size='3rem'/>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100006556233552">
                  <Facebook color='white' size='3rem'/>
                </a>
                <a href="https://github.com/blacksalman">
                  <Github color='white' size='3rem'/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer