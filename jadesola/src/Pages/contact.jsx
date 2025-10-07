import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_mjry9uf",   
        "template_u5m3gkk",  
        form.current,
        "CLj5S-cypFRHds7nf" 
      )
      .then(
        () => {
          setIsLoading(false);
          setToastMessage("✅ Message sent successfully!");
          form.current.reset();

          setTimeout(() => setToastMessage(null), 4000);
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
          setToastMessage("❌ Failed to send. Please try again.");
          setTimeout(() => setToastMessage(null), 4000);
        }
      );
  };

  return (
    <main className="contact-main">
        <section id="contact"></section>
      <div className="contact-container">
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <p>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out!
          </p>
        </div>

        <div className="contact-form-container">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
              />
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
{toastMessage && (
  <div className={`toast ${toastMessage.includes("❌") ? "error" : ""}`}>
    {toastMessage}
  </div>
)}
    </main>
  );
}

export default Contact;
