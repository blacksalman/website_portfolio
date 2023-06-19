import React, {useContext} from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Humble from '../../img/humble.png';
import Glasses from '../../img/glasses.png';
import Card from '../Card/Card';
import Resume from './Resume.pdf';
import {themeContext} from '../../Context';
import {motion} from 'framer-motion'

const Services = () => {
  const transition = {duration:1, type:'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='services'>
        <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
            <span>Services</span>
            <span>item To Write code as per the client's requirements.
              <br/>
              I work as a full-stack, creating Front-end(UI/UX) and Back-end code. 
              <br/>
              I use HTML and CSS to create web application projects on the Front-end.
              <br/>
              In the Back-end, I use JavaScript code to create web applications projects.
              <br/>
              I also test the applications before handover to the testing team.
            </span>
            <a href={Resume} download style={{textDecoration:'none'}}>
              <button className="button s-button">Download cv</button>
            </a>
            <div className="blur s-blur1" style={{background:"#ABF1FF94",position: 'relative'}}></div>
        </div>
        <div className="cards">
            <motion.div 
            initial={{ left: "25rem" }}
            whileInView={{ left: "14rem" }}
            transition={transition}
            >
                <Card 
                emoji = {HeartEmoji}
                heading = {'Design'}
                details = {'React, Material-Ui, CSS, Icons-scout'}
                />
             </motion.div>

             <motion.div 
             initial={{ left: "-11rem", top: "12rem" }}
             whileInView={{ left: "-4rem" }}
             transition={transition}
             >
                <Card
                  emoji={Glasses}
                  heading={'Full-Stack Developer'}
                  details={'HTML, CSS, JavaScript, Node.Js, Express.Js, React.Js, MongoDB'}
                />
             </motion.div>

             <motion.div 
             initial={{ top: "19rem", left: "25rem" }}
             whileInView={{ left: "12rem" }}
             transition={transition}>
                <Card
                  emoji={Humble}
                  heading={'UI/UX'}
                  details={'Full Stack Developers work with Design teams to bring their designs to life via code.'}
                />
             </motion.div>
             <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
         </div>
    </div>
  )
}

export default Services