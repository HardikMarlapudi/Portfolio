import React, { useState } from 'react';

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
    <section className="min-h-screen bg-white text-black dark:bg-slate-950 dark:text-white px-6 py-12 transition duration-500">
      <div className="max-w-3xl mx-auto">
      <h1 className="text-5xl font-bold text-center mb-16">
        Contact Me
      </h1>

      <p className="text-center text-black-300 mb-16">
        Have a question, opportunity, or project in mind? I'd love to hear from you.
      </p>

      <div className="dark:bg-slate-900 rounded-2xl p-8 shadow-lg">
        <form
          onSubmit={onSubmit}
          className="space-y-6"
        >
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name:"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-8 rounded-xl p-5 shadow-lg w-full dark:text-white dark:bg-slate-800 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
          />

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email:"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-8 rounded-xl p-5 shadow-lg w-full dark:text-white dark:bg-slate-800 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
          />

          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Subject:"
            value={formData.subject}
            onChange={handleChange}
            required
            className="mt-8 rounded-xl p-5 shadow-lg w-full dark:text-white dark:bg-slate-800 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
          />

          <textarea
            id="message"
            name="message"
            placeholder="Send a message..."
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-8 rounded-xl p-5 shadow-lg w-full dark:text-white dark:bg-slate-800 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer"
          />

          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-500 py-4 rounded-lg font-semibold transition cursor-pointer">Send</button>
        </form>

        <p id="result">{result && (
          <div className="mt-6 text-center">
              <p className={`${result.includes("successfully") ? "text-green-400" : "text-red-400"}`}>
                {result}
              </p>
          </div>
        )}
        </p>
      </div>
    </div>
  </section>
    </>
  );
}

export default Contact;
