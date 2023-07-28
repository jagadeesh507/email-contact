import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

 const Apply = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n5v7ong', 'template_5hcfnj8', form.current, 'onX5gKobJMRnk-p8Y')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    
    <div className='formcontainer'>
    <form ref={form} onSubmit={sendEmail}>
        <h1>Apply</h1>
      <label>Name</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email"required />
      <label>Position name you are applying</label>
      <input type="text" name="subject" required/>
      <label>Additional information</label>
      <textarea className="textarea"name="message"/><br/>
      <button>sent</button>
    </form>
    </div>
  );
};
export default Apply