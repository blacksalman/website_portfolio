import React, {useContext} from 'react';
import './Porfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Ecommerce from '../../img/E_CommerceApp.webp';
import ChatApp from '../../img/chat_app.png';
import StickyNotes from '../../img/sticky_notes.jpg';
import Unsplash from '../../img/unsplash.jpg';
import 'swiper/css'
import {themeContext} from '../../Context';

const Porfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id='protfolio'>
        {/* heading */}
        <span style={{color: darkMode?'white': ''}}>Recent projects</span>
        <span>Porfolio</span>

        {/* Slider */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <div className="img_sec">
            <a href="https://stalwart-gelato-6f88a2.netlify.app">
              <img src={Ecommerce} alt="" />
            </a>
            <span>Ecommerce</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="img_sec">
          <a href="https://leafy-beijinho-73d128.netlify.app">
           <img src={ChatApp} alt="" />
          </a>
           <span>ChatApp</span>
         </div>  
        </SwiperSlide>
        <SwiperSlide>
        <div className="img_sec">
          <a href="https://sweet-centaur-5981eb.netlify.app">
            <img src={StickyNotes} alt="" />
          </a>
          <span>StickyNotes</span>
        </div>  
        </SwiperSlide>
        <SwiperSlide>
        <div className="img_sec">
          <a href="https://zippy-biscuit-41b17f.netlify.app">
            <img src={Unsplash} alt="" />
          </a>
          <span>Unsplash</span>
        </div>  
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Porfolio