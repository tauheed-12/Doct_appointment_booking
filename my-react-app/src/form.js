import React, { useState } from 'react';

export default function Form({slot}){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const[header,SetHeader]=useState('After booking wait for notification');
  const sendEmail = async (emailData) => {
    try {
      const response = await fetch('http://localhost:8080/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      const result = await response.text();
      if(response.status==200){
        SetHeader("Your Slot is booked at ${slot}");
      }
      else{
        SetHeader("Error try again please!!");
      }
      console.log(result);
    } catch (error) {
      console.error('Error sending email:', error);
      SetHeader("Error try again please!!")
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(slot);
    sendEmail({ name, email, slot, text });
  };
  
  return (
    <div className='forms'>
    <h1>{header}</h1>
    <form onSubmit={handleSubmit} id='formz'>
    <div id='forma'>
    <div id='names'>
      <label>
        Name:
      </label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div id='emails'>
      <label>
        Email:
      </label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div> 
      </div>
      <div id='texts'>
      <label>
        Anything Want to Say:
      </label>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div id='buttons'>
      <button type="submit">Book Consultation</button>
      </div>
    </form>
    </div>
  );
};
