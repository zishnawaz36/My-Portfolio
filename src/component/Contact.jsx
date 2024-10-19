import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,  // Service ID from .env
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Template ID from .env
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY   // Public Key from .env
            )
            .then(
                () => {
                    console.log('SUCCESS!');
                    setResponseMessage('Message sent successfully!');
                    // Clear form fields after submission
                    setName('');
                    setEmail('');
                    setMessage('');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setResponseMessage('Failed to send message. Please try again.');
                }
            );
    };

    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center p-6">
            <div className="max-w-lg w-full mx-auto p-8 bg-gray-800 rounded-lg shadow-xl">
                <h2 className="text-4xl font-bold mb-6 text-white text-center">Contact Us</h2>

                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                        <input
                            type="text"
                            name="user_name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 text-white placeholder-gray-400"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                        <input
                            type="email"
                            name="user_email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 text-white placeholder-gray-400"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            rows="4"
                            className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 text-white placeholder-gray-400"
                            placeholder="Enter your message"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                    >
                        Send Message
                    </button>
                </form>

                {responseMessage && (
                    <p className="mt-4 text-center text-green-400 font-semibold">{responseMessage}</p>
                )}
            </div>
        </div>
    );
}

export default ContactForm;
