"use client"; 

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiHome } from 'react-icons/fi'; // Importing icons from react-icons library

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle form inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Send email function
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_name: "Coral Revive Team", 
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setForm({ name: '', email: '', subject: '', message: '' });
        },
        (error) => {
          setLoading(false);
          console.error('Email sending failed:', error);
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-white">
      <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center pt-10">Get In Touch</h2>
      <p className="text-center text-lg text-gray-700 italic mb-8">
        "Together, we can restore the beauty and biodiversity of our oceans"
      </p>

      <div className="container mx-auto grid lg:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-20 pt-10">
        {/* Contact Details */}
        <div className="flex flex-col justify-start">
          <p className="text-gray-700 text-lg text-left mb-8">
            For inquiries or collaboration opportunities in sustainable <br/> coral reef conservation, please reach out to our research team.
          </p>
          <ul className="space-y-4 text-gray-700 text-lg text-left">
            <li className="flex items-center">
              <FiMail className="mr-2" /> <span>coralrevivedeveloper@gmail.com</span>
            </li>
            <li className="flex items-start">
              <FiHome className="mr-2 mt-1" />
              <div className="leading-tight">
                Sri Lanka Institute of Information Technology, <br />
                New Kandy Rd, Malabe, Sri Lanka
              </div>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <form onSubmit={sendEmail} className="space-y-4 bg-gray-50 p-6 rounded-md shadow-md">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="p-3 border border-gray-300 rounded w-full"
              value={form.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-3 border border-gray-300 rounded w-full"
              value={form.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="p-3 border border-gray-300 rounded w-full"
            value={form.subject}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="p-3 border border-gray-300 rounded w-full h-32"
            value={form.message}
            onChange={handleInputChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-gray-700 text-white p-3 rounded hover:bg-gray-600 transition-colors"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {success && <p className="text-green-500 mt-2">Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
