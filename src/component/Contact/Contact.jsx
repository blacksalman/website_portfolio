import React, { useRef,useState, useContext } from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';

const Contact = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;

    const form = useRef();
    const [ done, setDone ] = useState(false)

    const serviceId = process.env.REACT_APP_SERVICEID;
    const templateId = process.env.REACT_APP_TEMPLATEID;
    const userId = process.env.REACT_APP_USERID;

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(serviceId, templateId, form.current, userId)
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        })
    }
  return (
    <div className="contact-form" id='contact'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color:darkMode ? 'white' : ''}}>Get in touch</span>
                <span>Conatact me</span>
                <div className="blur s-blur1" style={{background:"#ABFIFF94"}}></div>
            </div>
        </div>
        
        {/* right side */}
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Username' />
                <input type="email" name='user_email' className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='Message'></textarea>
                <input type="submit" value='send' className='button' />
                <span>{done && 'message sent succesfully'}</span>
                <div className="blur c-blur1" style={{background:'var(--purple)'}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact