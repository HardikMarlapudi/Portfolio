// src/Contact.jsx
import React, {useState} from 'react';
import './Contact.css';

function Contact() {

    const [result, setResult] = useState('');
    const [formData, setFormData] = useState ({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        
        formData.append("access_key", "7afe7930-8084-4fdd-9fe0-678ee3fdb2db");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if(data.success) {
            setResult("Thank you, your form has been submitted successfully.");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult("Sorry, something went wrong while submitting the form.");
        }
    }
    return (
        <>
        <h1 id="title" className="title fade-in">Contact</h1>
        <p className="subtitle fade-in">Have a question or a project in mind, would you like to share? Feel free to share.</p>
        <div>
            <form onSubmit={onSubmit} className="contact-form fade-in">
        <input
            id="name"
            type="text"
            name="name"
            placeholder="Name: "
            value={formData.name}
            onChange={setFormData}
            required
        />
        <input
            id="email"
            type="text"
            name="email"
            placeholder="Email:"
            value={formData.email}
            onChange={setFormData}
            required
        />
        <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Subject: "
            value={formData.subject}
            onChange={setFormData}
            required
        />
        <textarea
            id="message"
            type="text"
            name="message"
            placeholder="Send a message..."
            value={formData.message}
            onChange={setFormData}
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
