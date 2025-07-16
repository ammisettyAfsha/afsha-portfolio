'use client';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('https://formspree.io/f/xyzpyney', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Network error. Please try again.');
    }
  };

  return (
    <div>
        <Navbar/>
    <section className="max-w-2xl mx-auto mt-12 px-4">
      <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        You can also reach me at:{" "}
        <a
          href="mailto:ammisetty.afsha@gmail.com"
          className="text-yellow-600 underline hover:text-yellow-800"
        >
          ammisetty.afsha@gmail.com
        </a>
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded h-32"
        />
        <button
          type="submit"
          className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600 transition"
        >
          Send Message
        </button>
        {status && <p className="text-green-600 mt-2">{status}</p>}
      </form>
    </section>
    </div>
  );
}
