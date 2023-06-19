import React from 'react';
import Toggle from '../Toggle/Toggle';
import './Navbar.css';
import {Link} from 'react-scroll';

function Navbar() {
  return (
    <div className='n-wrapper' id='Navbar'>
        <div className="n-left">
            <div className="n-name">Salman Khan</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyle:'none'}}>
                    <Link to='Navbar' spy={true} smooth={true}>
                      <li>Home</li>
                    </Link>
                    <Link  to='services' spy={true} smooth={true}>
                      <li>Services</li>
                    </Link>
                    <Link  to='work' spy={true} smooth={true}>
                      <li>Experiences</li>
                    </Link>
                    <Link  to='portfolio' spy={true} smooth={true}>
                      <li>Portfolio</li>
                    </Link>
                    <Link  to='testimonial' spy={true} smooth={true}>
                      <li>Testimonial</li>
                    </Link>
                </ul>
            </div>
            <Link to='contact' spy={true} smooth={true}>
              <button className="button n-button">Contact us</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar