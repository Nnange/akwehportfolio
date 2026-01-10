import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const history = useNavigate();


  const sendMessage = (e) => {
    e.preventDefault();

    
    console.log(name, email, subject, message);
    history("/contact");

    setName('');
    setEmail('');
    setSubject('');
    setMessage('');

  };

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="ten columns">
          <h1>Reach Out</h1>
          <p className="lead">
            Feel free to contact me for any work or suggestions below
          </p>
        </div>
      </div>
      <div className="row">
        <aside className="eleven columns footer-widgets">
          <div className="widget">

            <form id="contactForm">
              <input
                id="contactName"
                type="text"
                placeholder="Your Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                id="contactEmail"
                type="text"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                id="contactSubject"
                type="text"
                placeholder="Subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}

              />
              <textarea
                id="contactMessage" 
                type="text"
                value={message}
                placeholder="Message"   
                onChange={(e) => setMessage(e.target.value)}
              />
              
              
              <button type="submit" onClick={sendMessage}>Send Message</button>
            </form>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ContactUs;
