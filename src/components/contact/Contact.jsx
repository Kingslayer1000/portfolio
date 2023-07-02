import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
import { MdEmail } from 'react-icons/md'
import {FaLinkedin} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'

const Contact = () => {
  const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_17fat2a', 'template_236072h', form.current, 'XPPxghOSTh4_8PY6l')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>neels2705@gmail.com</h5>
            <a href='mailto:neels2705@gmail.com' target="_blank" rel="noreferrer">Send a message</a>
          </article>
            <article className='contact_option'>
            <FaLinkedin className='contact_option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Neel Sharma</h5>
            <a href='https://www.linkedin.com/in/neel-sharma-6a5370214/' target="_blank" rel="noreferrer">Let's connect</a>
          </article>
          <article className='contact_option'>
            <SiLeetcode className='contact_option-icon'/>
            <h4>Leetcode</h4>
            <h5>snivellus7</h5>
            <a href='https://leetcode.com/snivellus7/' target="_blank" rel="noreferrer">800+ problems solved</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder="Type your message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact