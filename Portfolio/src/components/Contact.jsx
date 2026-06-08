import React, { useState } from 'react';
import '/src/css/Contact.css';

function Contact() {
  const [result, setResult] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult('Sending...');

    const submitData = new FormData(event.target);

    submitData.append(
      'access_key',
      '7afe7930-8084-4fdd-9fe0-678ee3fdb2db'
    );

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: submitData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult(
          'Thank you, your form has been submitted successfully.'
        );

        event.target.reset();

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        console.error('Error:', data);

        setResult(
          'Sorry, something went wrong while submitting the form.'
        );
      }
    } catch (error) {
      console.error('Error:', error);

      setResult(
        'Sorry, something went wrong while submitting the form.'
      );
    }
  };

  return (
    <>
      <h1 id="title" className="title fade-in">
        Contact
      </h1>

      <p className="subtitle">
        Have a question or a project in mind, would you like to share?
        Feel free to share.
      </p>

      <div>
        <form
          onSubmit={onSubmit}
          className="contact-form fade-in"
        >
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name:"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email:"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Subject:"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            id="message"
            name="message"
            placeholder="Send a message..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send</button>
        </form>

        <p id="result">{result}</p>
      </div>
    </>
  );
}

export default Contact;
