import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
export const ContactUs = () => {
  const form = useRef();
  const [sent, setSent]=useState(false);
  const [error, setError]=useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n5v7ong', 'template_oednwz8', form.current, 'onX5gKobJMRnk-p8Y')
      .then((result) => {
          setSent(true);
          setError(false);
      }, (error) => {
          setError(true);
          setSent(false);
      });
      e.target.reset();
  };

  return (
    <div className='formcontainer'>
      <h1>ContactUs</h1>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="User_email"required />
      <label>subject</label>
      <input type="text" name="subject" required/>
      <label>Message</label>
      <textarea className="textarea2"name="message"/><br/>
      <button>sent</button>
    </form>
    </div>
  );
};