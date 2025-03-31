import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {FaViber} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uelyt2t', 'template_x0hpxe4', form.current, '123')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    e.target.reset()
  };
  return (
    <>
    <h1 className='contact_me'>Contact Me</h1>
    <br />
    <br />
    <div className='contact_container'>
        <div className='options'>
          <div className='email  option'>
            <AiOutlineMail className='message_icon'/>
            <h3>Email</h3>
            <h4>albertbelbase018@gmail.com</h4>
            <a href = "mailto: albertbelbase018@gmail.com" target='_blank'>Send Email</a>
          </div>
          <div className='email option'>
            <BsMessenger className='message_icon' />
            <h3>Messenger</h3>
            <h4>Albert belbase</h4>
            <a href="https://m.me/albert.belbase.12" target='_blank'>Send Message</a>
          </div>
          <div className='email option'>
            <FaViber className='message_icon'/>
            <h3>Viber</h3>
            <h4>Albert</h4>
            <a href="viber://chat?number=9823437871" target='_blank'> chat with me </a>
          </div>
        </div>
        <form ref={form}>
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="email" name="email" placeholder='Your email' />
          <textarea name="message" placeholder='Message' rows="10"></textarea>
          <button className='send' onClick={sendEmail}>Send Message</button>
        </form>
    </div>
    </>
  )
}

export default Contact
