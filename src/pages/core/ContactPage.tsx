import React, { useState, Suspense } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, Users, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import Silk from '@/src/components/ui/Silk';
import PageAnimate from '../../components/ui/PageAnimate';
import { fadeInUp, fadeIn, scaleIn, slideInFromLeft, slideInFromRight } from '../../utils/animations';

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
    <PageAnimate className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-700">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Silk Background */}
        <div className="absolute inset-0 z-0">
          <Silk
            speed={3}
            scale={1.5}
            color="#1a365d"
            noiseIntensity={1.2}
            rotation={0}
            fullScreen={false}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
        </div>

        <motion.div
          className="container mx-auto px-4 relative z-10 text-center pt-20"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg"
            variants={fadeInUp}
            custom={1}
          >
            Get In <span className="text-af-gold">Touch</span>
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 max-w-2xl mx-auto drop-shadow"
            variants={fadeInUp}
            custom={2}
          >
            We'd love to hear from you. Whether you have a question or just want to say hello, feel free to reach out.
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-af-gold mx-auto mt-6"
            variants={fadeInUp}
            custom={3}
          />
        </motion.div>
      </section>

      <motion.section
        className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-700"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Address */}
            <motion.div
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2"
              variants={fadeInUp}
              custom={0}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-af-blue rounded-lg mb-4">
                <MapPin size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 dark:text-white mb-2">Address</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Air Force Station, Hindan<br />Ghaziabad, Uttar Pradesh - 201004<br />India
              </p>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2"
              variants={fadeInUp}
              custom={1}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-af-gold rounded-lg mb-4">
                <Phone size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 dark:text-white mb-2">Phone</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                +91 120-1234567<br />
                +91 8901234567<br />
                <span className="text-xs text-gray-500 dark:text-gray-400">Mon-Fri, 9am-5pm</span>
              </p>
            </motion.div>

            {/* Email */}
            <motion.div
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2"
              variants={fadeInUp}
              custom={2}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
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
            </motion.div>

            {/* Hours */}
            <motion.div
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2"
              variants={fadeInUp}
              custom={3}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-lg mb-4">
                <Clock size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 dark:text-white mb-2">Hours</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Mon-Fri: 8:30am - 5:00pm<br />
                Sat: 9:00am - 1:00pm<br />
                Sun: Closed
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Form & Map */}
      <motion.section
        className="py-20"
        {...fadeIn}
        transition={{ delay: 1.1 }}
      >
        <motion.div
          className="container mx-auto px-4"
          {...slideInFromLeft}
          transition={{ delay: 1.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              className="bg-white dark:bg-gray-800 p-10 rounded-xl shadow-lg transition-all duration-500"
              {...scaleIn}
              transition={{ delay: 1.3 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <motion.h2
                className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-8"
                {...slideInFromRight}
                transition={{ delay: 1.4 }}
              >
                Send us a Message
              </motion.h2>

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
            </motion.div>

            {/* Map & Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg h-80">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938.7987719576166!2d77.36024223268029!3d28.690015897767417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfa6fc1bcdbb9%3A0xb4b01efe95986d51!2sAir%20Force%20School%20Hindan!5e1!3m2!1sen!2sin!4v1767772543919!5m2!1sen!2sin"
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
        </motion.div>
      </motion.section>
    </PageAnimate>
  );
};

export default ContactPage;
