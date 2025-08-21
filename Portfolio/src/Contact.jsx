import React, {useState} from 'react';
import './Contact.css';

function Contact() {

    const [values, setValues] = useState ({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [touched, setTouched] = useState({});
    const [status, setStatus] = useState('idle');

    const errors = validate(values);

    function validate(v) {
        const e = {};
        if (!v.name.trim()) e.name = 'Please enter your name.';
        if(!v.email.trim()) e.email = 'Please enter your email.';
        else if (!/\S+@\S+\.\S+/.test(v.email)) e.email = 'Please enter a valid email address.';
        if (!v.subject.trim()) e.address = 'Please enter your subject.';
        if (!v.message.trim()) e.message = 'Please enter your message.';
        
        return e;
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setValues(prev => ({...prev, [name]: value}));
    }

    function handleBlur(e) {
        const {name} = e.target;
        setTouched(prev => ({...prev, [name]: true}));
    }

    async function handleSubmit (e) {
        e.preventDefault();
        setTouched({name: true, email: true, subject: true, message: true});

        if (Object.keys(errors).length > 0) return;

        try {
            setStatus('sending');

            const body = `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`;
            const subject = `[Portfolio] ${values.subject}`;
            const mailtoLink = `mailto:you@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            window.open(mailtoLink);

            setStatus('success');
            setValues({name: '', email: '', subject: '', message: ''});
            setTouched({});
        } catch (err) {
            console.log(err);
            setStatus('Error');
        }
    }

    return (
        <>
            <section className="contact">
                <div className="contaact-card">
                    <h1>Contact Me</h1>
                    <p className="subtitle">Have a question or a project in mind, would you like to share? Fell free to share</p>

                    {/* Status banners */}
                    {status === 'success' && (
                        <div className="banner success" role="status" aria-live="polite">
                            Thank you! Your message was delivered. If your email app didn't open, you can also email me directly.
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="banner error" role="alert">
                            Sorry something went wrong. Please try again or email me directly.
                        </div>
                    )}

                    <form noValidate onClick={handleSubmit}>
                        {/* Honeypot (hidden) */}
                        <input
                        type="text"
                        name="company"
                        value={values.company}
                        onChange={handleChange}
                        className="hp"
                        tabIndex="-1"
                        autoComplete='off'
                        />

                        <div className="field">
                            <label htmlFor="name">Name</label>
                            <input
                            id="name"
                            name="name"
                            type="text"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            aria-invalid={touched.name && !!errors.name}
                            aria-describedby={errors.name ? 'name-err' : undefined}
                            placeholder="Your full name"
                            required
                            />
                            {touched.name && errors.name && <p id="name-err" className="err">{errors.name}</p>}
                        </div>

                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input
                            id="email"
                            name="email"
                            type="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            aria-invalid={touched.email && !!errors.email}
                            aria-describedby={errors.email ? 'email-err' : undefined}
                            placeholder="yours@example.com"
                            required
                            />
                            {touched.email && errors.email && <p id="email-err" className="err">{errors.email}</p>}
                        </div>

                        <div className="field">
                            <label htmlFor="subject">Subject</label>
                            <input
                            id="subject"
                            name="subject"
                            type="text"
                            value={values.subject}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            aria-invalid={touched.subject && !!errors.subject}
                            aria-describedby={errors.subject ? 'subject-err' : undefined}
                            placeholder="What's this about?"
                            required
                            />
                            {touched.subject && errors.subject && <p id="subject-err" className="err">{errors.subject}</p>}
                        </div>

                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea
                            id="message"
                            name="message"
                            rows="6"
                            value={values.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            aria-invalid={touched.message && !!errors.message}
                            aria-describedby={errors.message ? 'message-err' : undefined}
                            placeholder="Tell me about your project, timeline, and goals..."
                            required
                            />
                            {touched.message && errors.message && <p id="message-err" className="err">{errors.message}</p>}
                        </div>

                        <button
                        type="submit"
                        className="btn"
                        disabled={status === 'sending'}
                        aria-busy={status === 'sending'}
                        >
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>

                        <p className="alt">
                            Prefer email? <a href="mailto:you@example.com">you@example.com</a>
                        </p>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact;
