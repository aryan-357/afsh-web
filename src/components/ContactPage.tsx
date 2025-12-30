import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-700">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-af-blue to-blue-700 dark:from-gray-800 dark:to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-af-gold rounded-full blur-3xl"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question or just want to say hello, feel free to reach out.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Address */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 bg-af-blue rounded-lg mb-4">
                <MapPin size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 dark:text-white mb-2">Address</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Air Force Station, Hindan<br />Ghaziabad, Uttar Pradesh - 201004<br />India
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 bg-af-gold rounded-lg mb-4">
                <Phone size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 dark:text-white mb-2">Phone</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                +91 120-1234567<br />
                +91 8901234567<br />
                <span className="text-xs text-gray-500 dark:text-gray-400">Mon-Fri, 9am-5pm</span>
              </p>
            </div>

            {/* Email */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 bg-red-500 rounded-lg mb-4">
                <Mail size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 dark:text-white mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                <a href="mailto:afschoolhindan@gmail.com" className="hover:text-af-blue transition-colors">
                  afschoolhindan@gmail.com
                </a><br />
                <a href="mailto:info@afschoolhindan.in" className="hover:text-af-blue transition-colors">
                  info@afschoolhindan.in
                </a>
              </p>
            </div>

            {/* Hours */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-lg mb-4">
                <Clock size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 dark:text-white mb-2">Hours</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Mon-Fri: 8:30am - 5:00pm<br />
                Sat: 9:00am - 1:00pm<br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg transition-all duration-500">
              <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-8">Send us a Message</h2>
              
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3 animate-in fade-in duration-300">
                  <CheckCircle className="text-green-600 dark:text-green-400" size={20} />
                  <span className="text-green-700 dark:text-green-300">Thank you! We'll be in touch soon.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-af-blue transition-all duration-300"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-af-blue transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXXXXXXX"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-af-blue transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this about?"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-af-blue transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-af-blue transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-af-blue hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-500 ease-out transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg h-80">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.0000000000005!2d77.1234567!3d28.9000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAir%20Force%20Station%2C%20Hindan!5e0!3m2!1sen!2sin!4v1234567890"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Quick Links */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-500">
                <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6">Quick Links</h3>
                <div className="space-y-3">
                  <a href="/admissions" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-af-blue dark:hover:text-af-light transition-all duration-400 ease-out group hover:translate-x-1">
                    <div className="w-2 h-2 bg-af-blue rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    Admission Information
                  </a>
                  <a href="/academics" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-af-blue dark:hover:text-af-light transition-all duration-400 ease-out group hover:translate-x-1">
                    <div className="w-2 h-2 bg-af-blue rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    Academic Programs
                  </a>
                  <a href="/student-life" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-af-blue dark:hover:text-af-light transition-all duration-400 ease-out group hover:translate-x-1">
                    <div className="w-2 h-2 bg-af-blue rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    Student Life
                  </a>
                  <a href="/gallery" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-af-blue dark:hover:text-af-light transition-all duration-400 ease-out group hover:translate-x-1">
                    <div className="w-2 h-2 bg-af-blue rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    Gallery
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
