import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/contact-us@move37capital.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="pt-32 relative min-h-screen flex items-center justify-center px-6 py-12 bg-white">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/london_bridge2.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-100"
        />
      </div>

      {/* Foreground */}
      <div className="relative z-10 max-w-6xl w-full bg-white/50 backdrop-blur-sm p-12 rounded-3xl shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-900">Get in Touch</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          {submitted ? (
            <div className="text-center text-2xl font-semibold text-green-700">
              Thank you! Your message has been sent.
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="_captcha" value="false" />
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full bg-white/80 border border-gray-300 p-4 rounded-xl placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full bg-white/80 border border-gray-300 p-4 rounded-xl placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Type your message..."
                  required
                  className="w-full bg-white/80 border border-gray-300 p-4 rounded-xl placeholder-gray-500 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold"
              >
                Send Message
              </button>
            </form>
          )}

          {/* Contact Info */}
          <div className="flex flex-col justify-start mt-12 space-y-8 text-gray-900">
            <div className="flex items-start gap-4">
              <Mail className="text-blue-500 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p>contact-us@move37capital.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-blue-500 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p>+44 77410 19491</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-blue-500 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Address</h3>
                <p className="mt-2">
            Move37 Capital,<br />
            Spaces, The Charter Building,<br />
            Uxbridge&nbsp;UB8&nbsp;1JG
          </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
