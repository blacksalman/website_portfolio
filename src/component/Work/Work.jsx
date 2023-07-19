import React, {useContext} from 'react';
import Upwork from '../../img/instagram.jpg';
import Fiverr from '../../img/whatsapp.jpg';
import Amazon from '../../img/unnamed.webp';
import Shopify from '../../img/twitter.jpg';
import Facebook from '../../img/Facebook.png';
import './Work.css';
import { themeContext } from '../../Context';
import {motion} from 'framer-motion'
import {Link} from 'react-scroll';

const Work = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="work" id='work'>
        <div className="awesome">
                <span style={{ color: darkMode ? "white" : "" }}> Works for All these</span>
                <span>Brands & Clients</span>
                <span>I work on Instagram, WhatsApp, Facebook product hunt and Twitter tools.</span>
            <Link to='contact' spy={true} smooth={true}>
              <button className="button w-button">Hire me</button>
            </Link>
            <div className="blur s-blur1" style={{background:"#ABF1FF94",position: 'relative', top:'-5vh'}}></div>
        </div>
        <div className="w-right">
            <motion.div 
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            className="w-mainCircle">
                <div className="w-secCircle">
                    <img id='upwork_png' src={Upwork} alt="Upwork png" />
                </div>
                <div className="w-secCircle">
                    <img id='fiverr_png' src={Fiverr} alt="Fiverr png" />
                </div>
                <div className="w-secCircle">
                    <img id='amazon_png' src={Amazon} alt="Amazon png" />
                </div>
                <div className="w-secCircle">
                    <img id='shopify_png' src={Shopify} alt="Shopify png" />
                </div>
                <div className="w-secCircle">
                    <img id='facebook_png' src={Facebook} alt="Facebook png" />
                </div>
            </motion.div>
            {/* backgound circle */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yelloCircle"></div>
        </div>
    </div>
  )
}

export default Work