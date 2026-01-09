import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, ArrowLeft, CheckCircle, Mail, Phone, MapPin, Calendar, Briefcase, Award, AlertCircle } from 'lucide-react';
import Silk from '../../components/ui/Silk';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2, margin: "-100px" },
  transition: { duration: 0.3, ease: "easeOut" as const }
};

const slideInFromLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2, margin: "-100px" },
  transition: { duration: 0.4, ease: "easeOut" as const }
};

const slideInFromRight = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2, margin: "-100px" },
  transition: { duration: 0.4, ease: "easeOut" as const }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.2, margin: "-100px" },
  transition: { duration: 0.3, ease: "easeOut" as const }
};

const AlumniRegistrationPage: React.FC = () => {
  const navigate = useNavigate();
  
  // Local interface for form data
  interface AlumniFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    batchYear: string;
    passingYear: string;
    currentOccupation: string;
    company: string;
    designation: string;
    address: string;
    city: string;
    state: string;
    country: string;
    pinCode: string;
    linkedInProfile: string;
    achievements: string;
    memories: string;
    allowContact: boolean;
    newsletter: boolean;
  }

  const [formData, setFormData] = useState<AlumniFormData>({
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
    pinCode: '',
    linkedInProfile: '',
    achievements: '',
    memories: '',
    allowContact: false,
    newsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    
    // Required field validations
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Invalid email format';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    else if (!/^[+]?[\d\s\-\(\)]+$/.test(formData.phone)) errors.phone = 'Invalid phone format';
    if (!formData.batchYear) errors.batchYear = 'Batch year is required';
    if (!formData.passingYear) errors.passingYear = 'Passing year is required';
    if (!formData.currentOccupation.trim()) errors.currentOccupation = 'Current occupation is required';
    if (!formData.address.trim()) errors.address = 'Address is required';
    if (!formData.city.trim()) errors.city = 'City is required';
    if (!formData.state.trim()) errors.state = 'State is required';
    if (!formData.country.trim()) errors.country = 'Country is required';
    
    // Year validations
    const currentYear = new Date().getFullYear();
    if (formData.batchYear && (parseInt(formData.batchYear) < 1950 || parseInt(formData.batchYear) > currentYear)) {
      errors.batchYear = 'Invalid batch year';
    }
    if (formData.passingYear && (parseInt(formData.passingYear) < parseInt(formData.batchYear) || parseInt(formData.passingYear) > currentYear)) {
      errors.passingYear = 'Invalid passing year';
    }
    
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) {
      setError('Please fix the errors below');
      return;
    }
    
    // TODO: Add your backend API call here
    console.log('Form data ready for backend:', formData);
    
    // Placeholder for your backend implementation
    // Example:
    // try {
    //   const response = await fetch('/api/alumni/register', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    //   });
    //   const result = await response.json();
    //   if (result.success) {
    //     setIsSubmitted(true);
    //     // Handle success
    //   }
    // } catch (error) {
    //   setError('Registration failed. Please try again.');
    // }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden mb-32">
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
        <div className="container mx-auto px-4 relative z-10 text-center pt-32">
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.1 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <GraduationCap className="w-16 h-16 mx-auto mb-6 text-af-gold" />
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg"
              {...slideInFromLeft}
              transition={{ delay: 0.2 }}
            >
              Alumni <span className="text-af-gold">Registration</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 max-w-2xl mx-auto drop-shadow"
              {...slideInFromRight}
              transition={{ delay: 0.3 }}
            >
              Join our alumni network and stay connected with your alma mater
            </motion.p>
            <motion.div 
              className="w-24 h-1 bg-af-gold mx-auto mt-6"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, amount: 0.2, margin: "-100px" }}
              transition={{ delay: 0.4, duration: 0.6 }}
            ></motion.div>
          </motion.div>
        </div>
      </section>

      {/* Registration Form */}
      <motion.section 
        className="container mx-auto px-4 pb-20"
        {...fadeIn}
        transition={{ delay: 0.5 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...slideInFromLeft}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="/alumni"
              className="inline-flex items-center gap-2 text-af-blue dark:text-af-light hover:text-af-gold transition-colors mb-8 font-medium"
            >
              <motion.div
                whileHover={{ 
                  x: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <ArrowLeft size={20} />
              </motion.div>
              Back to Alumni Page
            </Link>
          </motion.div>

          <motion.div
            {...scaleIn}
            transition={{ delay: 0.7 }}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.3 }
            }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Error Display */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-800 dark:text-red-200 font-medium">Error</p>
                    <p className="text-red-600 dark:text-red-300 text-sm">{error}</p>
                  </div>
                </motion.div>
              )}
              
              {/* Personal Information */}
              <motion.div
                {...fadeIn}
                transition={{ delay: 0.8 }}
              >
                <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Mail className="w-6 h-6 text-af-blue" />
                  </motion.div>
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
                      placeholder="Enter your first name"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-af-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${
                        fieldErrors.firstName ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                    />
                    {fieldErrors.firstName && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{fieldErrors.firstName}</p>
                    )}
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
                      placeholder="Enter your last name"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-af-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email address"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-af-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${
                        fieldErrors.email ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
                      }`}
                    />
                    {fieldErrors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{fieldErrors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-af-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Academic Information */}
              <motion.div
                {...fadeIn}
                transition={{ delay: 0.9 }}
              >
                <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <GraduationCap className="w-6 h-6 text-af-blue" />
                  </motion.div>
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
              </motion.div>

              {/* Professional Information */}
              <motion.div
                {...fadeIn}
                transition={{ delay: 1.0 }}
              >
                <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Briefcase className="w-6 h-6 text-af-blue" />
                  </motion.div>
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
                      Company *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Google"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-af-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                      Designation *
                    </label>
                    <input
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Senior Developer"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-af-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                      Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      placeholder="123, Main Street"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-af-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Delhi"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-af-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Uttar Pradesh"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-af-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                      Country *
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      placeholder="e.g., India"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-af-blue focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Additional Information */}
              <motion.div
                {...fadeIn}
                transition={{ delay: 1.1 }}
              >
                <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Award className="w-6 h-6 text-af-blue" />
                  </motion.div>
                  Additional Information
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                      Achievements (Optional)
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
              </motion.div>

              {/* Submit Button */}
              <motion.div
                {...fadeIn}
                transition={{ delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="flex-1 bg-af-blue hover:bg-af-light text-white px-8 py-4 rounded-lg font-bold transition duration-300 uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                </motion.button>
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Link
                    to="/alumni"
                    className="flex-1 text-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-8 py-4 rounded-lg font-bold transition duration-300 uppercase tracking-widest"
                  >
                    Cancel
                  </Link>
                </motion.div>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AlumniRegistrationPage;
