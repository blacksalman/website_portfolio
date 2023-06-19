import React, {useContext} from "react";
import './Intro.css'
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glaassesimoji from '../../img/glassesimoji.png';
import {themeContext} from '../../Context';
import {motion} from 'framer-motion';
import {Link} from 'react-scroll';

const Intro = () =>{
    const transition = {duration:2, type: 'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="intro" id='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
                    <span>Salman Khan</span>
                    <span> Full Stack Developers have enough insight into both front and back-end coding to where they can oversee the process. Almost like an account manager who oversees multiple aspects of a project.</span>
                </div>
                <Link to='contact' spy={true} smooth={true}>
                   <button className="button i-button">Hire me</button>
                </Link>
                <div className="i-icons">
                    <a href="https://github.com/blacksalman">
                    <img src={Github} alt="Github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/salman-khan-7b6782202/">
                    <img src={LinkedIn} alt="LinkedIn icon" />
                    </a>
                    <a href="https://www.instagram.com/black_bear_0/">
                    <img src={Instagram} alt="Instagram icon" />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="Vector1 icon" />
                <img src={Vector2} alt="Vector2 icon" />
                <img src={boy} alt="boy icon" />
                <motion.img 
                initial={{left:'-36%'}}
                whileInView={{left:'-24%'}}
                transition={transition}
                src={glaassesimoji} alt="glass imoji" />
                <motion.div 
                initial={{ top: "-4%", left: "74%" }}
                whileInView={{left:'68%'}}
                transition={transition}
                style={{top:'-4%', left:'68%'}} className="floating-div">
                    <FloatingDiv image={Crown} txt1='JavScript' txt2='Developer'/>
                </motion.div>
                <motion.div
                initial={{ left: "9rem", top: "18rem" }}
                whileInView={{ left: "0rem" }}
                transition={transition}
                 style={{top:'18rem', left:'0rem'}} className="floating-div">
                    <FloatingDiv image={thumbup} txt1='Full-Stack' txt2='Developer' />
                </motion.div>
                <div className="blur" style={{background:"rgb(238,210,255)"}}> </div>
                <div className="blur" style={{
                    background:'#C1F5FF',
                    top:'17rem',
                    width:'21rem',
                    height:'11rem',
                    left:'-9rem'
                }}></div>
            </div>
        </div>
    )
}

export default Intro;