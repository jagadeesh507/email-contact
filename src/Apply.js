import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';

 const Apply = () => {
 const [sent,setSent]=useState(false);
 const [error,setError]=useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const { user_name, user_email, subject } = e.target.elements;

  if (!user_name.value || !user_email.value || !subject.value) {
    setError(true);
    return;
  }

  const isValidEmail = validateEmail(user_email.value);

  if (!isValidEmail) {
    setError(true);
    return;
  }

  setError(false); 
    emailjs.sendForm('service_n5v7ong', 'template_5hcfnj8', form.current, 'onX5gKobJMRnk-p8Y')
      .then((result) => {
          setSent(true);
          setError(false);
      }, (error) => {
          setError(true);
          setSent(false);
      });
      e.target.reset();
  };
  if (sent) {
    return (
      <div className='formcontainer'>
        <h2>Application Sent Successfully!</h2>
        <p>Thank you for applying. We will get back to you soon.</p>
      </div>
    );
  }
  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }
  

  return (
    <div className='formcontainer'>
    {error && <p className="error-message">Invalid details. Please enter correct information.</p>}
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