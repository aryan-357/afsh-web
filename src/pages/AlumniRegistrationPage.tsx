import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, ArrowLeft, CheckCircle, Mail, Phone, MapPin, Calendar, Briefcase, Award } from 'lucide-react';
import Silk from '../components/ui/Silk';

const AlumniRegistrationPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    batchYear: '',
    passingYear: '',
    currentOccupation: '',
    company: '',
    designation: '',
    address: '',
    city: '',
    state: '',
    country: '',
    achievements: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Registration data:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds and redirect
    setTimeout(() => {
      navigate('/alumni');
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md"
        >
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Registration Successful!</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Thank you for registering. We'll review your information and get back to you soon.
          </p>
          <p className="text-sm text-gray-500">Redirecting to Alumni page...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden mb-24">
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
        <div className="container mx-auto px-4 relative z-10 text-center pt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GraduationCap className="w-16 h-16 mx-auto mb-6 text-af-gold" />
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
              Alumni <span className="text-af-gold">Registration</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto drop-shadow">
              Join our alumni network and stay connected with your alma mater
            </p>
            <div className="w-24 h-1 bg-af-gold mx-auto mt-6"></div>
          </motion.div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/alumni"
            className="inline-flex items-center gap-2 text-af-blue dark:text-af-light hover:text-af-gold transition-colors mb-8 font-medium"
          >
            <ArrowLeft size={20} />
            Back to Alumni Page
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <Mail className="w-6 h-6 text-af-blue" />
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-af-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-af-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-af-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-af-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Academic Information */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-af-blue" />
                  Academic Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                      Batch Year *
                    </label>
                    <input
                      type="number"
                      name="batchYear"
                      value={formData.batchYear}
                      onChange={handleChange}
                      required
                      min="1950"
                      max={new Date().getFullYear()}
                      placeholder="e.g., 2010"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-af-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                      Passing Year *
                    </label>
                    <input
                      type="number"
                      name="passingYear"
                      value={formData.passingYear}
                      onChange={handleChange}
                      required
                      min="1950"
                      max={new Date().getFullYear()}
                      placeholder="e.g., 2012"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-af-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-af-blue" />
                  Professional Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                      Current Occupation *
                    </label>
                    <input
                      type="text"
                      name="currentOccupation"
                      value={formData.currentOccupation}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Software Engineer"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-af-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g., Google Inc."
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-af-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                      Designation
                    </label>
                    <input
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      placeholder="e.g., Senior Software Architect"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-af-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-af-blue" />
                  Address Information
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                      Address
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-af-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-af-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-af-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-af-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6 text-af-blue" />
                  Additional Information
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                      Achievements & Awards
                    </label>
                    <textarea
                      name="achievements"
                      value={formData.achievements}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Share your achievements, awards, or notable accomplishments..."
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-af-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Any additional message or information you'd like to share..."
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-af-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-af-blue hover:bg-af-light text-white px-8 py-4 rounded-lg font-bold transition duration-300 uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                </button>
                <Link
                  to="/alumni"
                  className="flex-1 text-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-8 py-4 rounded-lg font-bold transition duration-300 uppercase tracking-widest"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AlumniRegistrationPage;

