import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const serviceId = import.meta.env.VITE_SERVICE_ID;
        const templateId = import.meta.env.VITE_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_PUBLIC_KEY;

        // Create template params matching your EmailJS template variables
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: 'Akash Verma',
        };

        try {
            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="contact-section">
            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact-subtitle">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="contact-form-container">
                {status === 'success' ? (
                    <div className="success-message">
                        <div className="success-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <h3 className="success-title">Message Sent!</h3>
                        <p className="success-text">
                            Thanks for reaching out, {formData.name ? formData.name : 'friend'}. I'll get back to you soon.
                        </p>
                        <button
                            className="submit-btn"
                            style={{ marginTop: '2rem', width: 'auto' }}
                            onClick={() => setStatus('idle')}
                        >
                            Send Another
                        </button>
                    </div>
                ) : (
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-input"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-input"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="form-textarea"
                                placeholder="Tell me about your project..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="submit-btn"
                            disabled={status === 'submitting'}
                        >
                            {status === 'submitting' ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Contact;
