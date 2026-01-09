import React, { useState, Suspense } from 'react';
import { Send, FileText, DollarSign, FileCheck, HelpCircle, CheckCircle, GraduationCap, Calendar, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import Silk from '@/src/components/ui/Silk';

interface FormData {
  name: string;
  email: string;
  phone: string;
  class: string;
  guardianName: string;
  message: string;
}

const AdmissionPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    class: '',
    guardianName: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.4, ease: "easeOut" as const }
  };

  const slideInFromLeft = {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.4, ease: "easeOut" as const }
  };

  const slideInFromRight = {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.4, ease: "easeOut" as const }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.4, ease: "easeOut" as const }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', class: '', guardianName: '', message: '' });
    }, 3000);
  };

  const faqs = [
    {
      question: 'What is the admission process?',
      answer: 'Admission to Air Force School Hindan is based on merit and entrance examination. Students applying for Classes I-IV undergo informal assessment, while Classes V onwards require written examinations in English, Mathematics, and reasoning.'
    },
    {
      question: 'What are the eligibility criteria?',
      answer: 'Students must meet the age requirements as per CBSE guidelines. Children of Air Force personnel get priority. General students are admitted based on merit and availability of seats.'
    },
    {
      question: 'When are admissions open?',
      answer: 'Admissions are open from November to March for the next academic year. Registration forms are available on the school website. Classes are allocated after the entrance examination.'
    },
    {
      question: 'What is the fee structure?',
      answer: 'Fees vary by class and category. Concessions are available for children of Air Force personnel. A detailed fee structure is available on request or can be downloaded from the school website.'
    },
    {
      question: 'Do you provide scholarships?',
      answer: 'Yes, merit-based scholarships are available for deserving students. Special concessions are provided to Air Force wards, SC/ST students, and students with special needs.'
    },
    {
      question: 'What documents are required for admission?',
      answer: 'Required documents include: Birth Certificate, Previous School Certificate, Marks Sheets, Transfer Certificate, Aadhar Card, and photographs (4x6). Air Force ID for service wards is mandatory.'
    },
    {
      question: 'Is there a school bus facility?',
      answer: 'Yes, the school provides bus transport facility covering major areas. Transportation charges are separate and billed quarterly.'
    },
    {
      question: 'What is the school curriculum?',
      answer: 'Air Force School Hindan follows the CBSE (Central Board of Secondary Education) curriculum for Classes I-XII, ensuring quality education and national recognition.'
    }
  ];

  const admissionSteps = [
    {
      number: 1,
      title: 'Registration',
      description: 'Complete the registration form available during the admission period',
      icon: '📝'
    },
    {
      number: 2,
      title: 'Entrance Examination',
      description: 'Appear for written exam (English, Math, Reasoning) - applicable for Class V onwards',
      icon: '✏️'
    },
    {
      number: 3,
      title: 'Merit List',
      description: 'Merit list published based on entrance exam performance and previous academic records',
      icon: '📊'
    },
    {
      number: 4,
      title: 'Documentation',
      description: 'Submit required documents for verification and processing',
      icon: '📄'
    },
    {
      number: 5,
      title: 'Fee Payment',
      description: 'Complete fee payment as per the decided amount and schedule',
      icon: '💳'
    },
    {
      number: 6,
      title: 'Admission Confirmation',
      description: 'Receive admission confirmation and enrollment materials',
      icon: '✅'
    }
  ];

  const feeStructure = [
    { class: 'Classes I-II', tuition: '₹45,000', annual: '₹5,000', total: '₹50,000' },
    { class: 'Classes III-V', tuition: '₹50,000', annual: '₹5,500', total: '₹55,500' },
    { class: 'Classes VI-VIII', tuition: '₹60,000', annual: '₹6,000', total: '₹66,000' },
    { class: 'Classes IX-X', tuition: '₹70,000', annual: '₹7,000', total: '₹77,000' },
    { class: 'Classes XI-XII', tuition: '₹80,000', annual: '₹8,000', total: '₹88,000' },
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 pb-20">
      {/* Hero Section */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden mb-20">
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
          className="container mx-auto px-4 relative z-10 text-center pt-24"
          {...fadeIn}
          transition={{ delay: 0.1 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-lg"
            {...slideInFromLeft}
            transition={{ delay: 0.2 }}
          >
            Join Our <span className="text-af-gold">Institution</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-blue-100 max-w-3xl mx-auto drop-shadow"
            {...slideInFromRight}
            transition={{ delay: 0.3 }}
          >
            Join the legacy of excellence at Air Force School Hindan. We welcome students who aspire to be leaders.
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-af-gold mx-auto mt-6"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </motion.div>
      </section>

      {/* Admission Process */}
      <motion.section 
        className="container mx-auto px-4 mb-20"
        {...fadeIn}
        transition={{ delay: 0.5 }}
      >
        <motion.div 
          className="text-center mb-12"
          {...slideInFromLeft}
          transition={{ delay: 0.6 }}
        >
          <motion.h2 
            className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4"
            {...scaleIn}
            transition={{ delay: 0.7 }}
          >
            Admission Process
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 text-lg"
            {...slideInFromRight}
            transition={{ delay: 0.8 }}
          >
            Follow these steps to join our school
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {admissionSteps.map((step, index) => (
            <motion.div
              key={step.number} 
              className="relative"
              {...scaleIn}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300 text-center h-full">
                <div className="text-5xl mb-4">{step.icon}</div>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 mt-4">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{step.description}</p>
              </div>
              {step.number < 6 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Fee Structure */}
      <motion.section 
        className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-16 mb-20"
        {...fadeIn}
        transition={{ delay: 1.6 }}
      >
        <motion.div 
          className="container mx-auto px-4"
          {...slideInFromLeft}
          transition={{ delay: 1.7 }}
        >
          <motion.div 
            className="text-center mb-12"
            {...scaleIn}
            transition={{ delay: 1.8 }}
          >
            <motion.h2 
              className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4"
              {...slideInFromRight}
              transition={{ delay: 1.9 }}
            >
              Fee Structure
            </motion.h2>
            <motion.p 
              className="text-gray-600 dark:text-gray-400 text-lg"
              {...fadeIn}
              transition={{ delay: 2.0 }}
            >
              Annual fees for different classes (Per Year)
            </motion.p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-af-blue text-white">
                  <th className="px-6 py-4 text-left font-bold">Class</th>
                  <th className="px-6 py-4 text-right font-bold">Tuition Fee</th>
                  <th className="px-6 py-4 text-right font-bold">Annual Charges</th>
                  <th className="px-6 py-4 text-right font-bold">Total</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee, idx) => (
                  <tr key={idx} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{fee.class}</td>
                    <td className="px-6 py-4 text-right text-gray-600 dark:text-gray-300">{fee.tuition}</td>
                    <td className="px-6 py-4 text-right text-gray-600 dark:text-gray-300">{fee.annual}</td>
                    <td className="px-6 py-4 text-right font-bold text-af-blue dark:text-af-light">{fee.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-af-blue rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-bold text-af-blue dark:text-af-light">Note:</span> Special concessions available for children of Air Force personnel (10-50% reduction). Merit scholarships available for deserving students. Fees are subject to change. For the latest fee structure, please contact the school directly.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Query Form Section */}
      <motion.section 
        className="container mx-auto px-4 mb-20"
        {...fadeIn}
        transition={{ delay: 2.1 }}
      >
        <motion.div 
          className="max-w-2xl mx-auto"
          {...slideInFromLeft}
          transition={{ delay: 2.2 }}
        >
          <motion.div 
            className="text-center mb-12"
            {...scaleIn}
            transition={{ delay: 2.3 }}
          >
            <motion.h2 
              className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4"
              {...slideInFromRight}
              transition={{ delay: 2.4 }}
            >
              Admission Inquiry Form
            </motion.h2>
            <motion.p 
              className="text-gray-600 dark:text-gray-400 text-lg"
              {...fadeIn}
              transition={{ delay: 2.5 }}
            >
              Have questions? Contact us using the form below
            </motion.p>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
            {...scaleIn}
            transition={{ delay: 2.6 }}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Thank You!</h3>
                <p className="text-gray-600 dark:text-gray-400">Your inquiry has been submitted successfully. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Student Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter student's full name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-af-blue dark:focus:border-af-light transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-af-blue dark:focus:border-af-light transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91-XXXXXXXXXX"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-af-blue dark:focus:border-af-light transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Applying for Class *</label>
                    <select
                      name="class"
                      value={formData.class}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-af-blue dark:focus:border-af-light transition-colors"
                    >
                      <option value="">Select Class</option>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1} value={`Class ${i + 1}`}>Class {i + 1}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Guardian Name *</label>
                  <input
                    type="text"
                    name="guardianName"
                    value={formData.guardianName}
                    onChange={handleChange}
                    required
                    placeholder="Father's / Mother's name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-af-blue dark:focus:border-af-light transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Message / Questions</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your interests, achievements, or any specific questions..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-af-blue dark:focus:border-af-light transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-af-blue to-blue-700 hover:from-af-blue hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send size={20} />
                  Submit Inquiry
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Transfer Certificate Section */}
      <motion.section 
        className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-16 mb-20"
        {...fadeIn}
        transition={{ delay: 2.7 }}
      >
        <motion.div 
          className="container mx-auto px-4"
          {...slideInFromLeft}
          transition={{ delay: 2.8 }}
        >
          <motion.div 
            className="max-w-4xl mx-auto"
            {...scaleIn}
            transition={{ delay: 2.9 }}
          >
            <motion.div 
              className="flex items-center gap-4 mb-8"
              {...slideInFromRight}
              transition={{ delay: 3.0 }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FileCheck className="w-12 h-12 text-af-blue dark:text-af-light flex-shrink-0" />
              </motion.div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white">Transfer Certificate</h2>
            </motion.div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Procedure</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex gap-3">
                    <span className="font-bold text-af-blue">•</span>
                    Submit a written request to the office for TC generation
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-af-blue">•</span>
                    TC is issued within 7-10 working days
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-af-blue">•</span>
                    Processing fee: ₹500 (as per school norms)
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-af-blue">•</span>
                    Document carries official school seal and signature
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Required Documents</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex gap-3">
                    <CheckCircle size={20} className="flex-shrink-0 text-green-500" />
                    Original Admission Form
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle size={20} className="flex-shrink-0 text-green-500" />
                    School ID Card
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle size={20} className="flex-shrink-0 text-green-500" />
                    Fee Clearance Certificate
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle size={20} className="flex-shrink-0 text-green-500" />
                    Character Certificate from current class teacher
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* FAQs Section */}
      <motion.section 
        className="container mx-auto px-4 mb-20"
        {...fadeIn}
        transition={{ delay: 3.1 }}
      >
        <motion.div 
          className="text-center mb-12"
          {...slideInFromLeft}
          transition={{ delay: 3.2 }}
        >
          <motion.h2 
            className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4"
            {...scaleIn}
            transition={{ delay: 3.3 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 text-lg"
            {...slideInFromRight}
            transition={{ delay: 3.4 }}
          >
            Find answers to common admission queries
          </motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300"
              {...scaleIn}
              transition={{ delay: 3.5 + idx * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white pr-4">{faq.question}</h3>
                <span className={`flex-shrink-0 text-af-blue dark:text-af-light text-2xl transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              {openFaqIndex === idx && (
                <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
                  <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="bg-gradient-to-r from-af-blue to-blue-700 text-white rounded-2xl container mx-auto px-4 py-12 text-center"
        {...scaleIn}
        transition={{ delay: 3.8 }}
        whileHover={{ 
          y: -5,
          transition: { duration: 0.3 }
        }}
      >
        <motion.h2 
          className="text-3xl font-serif font-bold mb-4"
          {...slideInFromLeft}
          transition={{ delay: 3.9 }}
        >
          Still Have Questions?
        </motion.h2>
        <motion.p 
          className="text-blue-100 mb-6 max-w-2xl mx-auto"
          {...slideInFromRight}
          transition={{ delay: 4.0 }}
        >
          Contact our admissions office directly for personalized assistance
        </motion.p>
        <motion.div 
          className="flex flex-col md:flex-row justify-center gap-6 text-blue-50"
          {...fadeIn}
          transition={{ delay: 4.1 }}
        >
          <div>
            <p className="font-bold mb-1">Phone</p>
            <p>+91-XXXXXXXXXX (Ext. 101)</p>
          </div>
          <div>
            <p className="font-bold mb-1">Email</p>
            <p>admissions@afschoolhindan.edu.in</p>
          </div>
          <div>
            <p className="font-bold mb-1">Office Hours</p>
            <p>Mon-Fri: 9:00 AM - 4:00 PM</p>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AdmissionPage;
