import React, { useState } from 'react';
import { BookOpen, CheckCircle, Trophy, ArrowRight } from 'lucide-react';

const AcademicsPage: React.FC = () => {
  const [expandedDept, setExpandedDept] = useState<string | null>(null);

  const departments = [
    {
      id: 'english',
      name: 'English',
      icon: '📚',
      description: 'Language and Literature',
      faculty: '12 Experienced Teachers',
      subjects: ['English Language', 'English Literature', 'Creative Writing'],
      highlights: ['Debate Champions', 'Literary Fest Winners', 'Essay Writing Excellence'],
      staffLead: 'Dr. Emily Roberts'
    },
    {
      id: 'mathematics',
      name: 'Mathematics',
      icon: '🔢',
      description: 'Problem Solving & Logic',
      faculty: '14 Expert Mathematicians',
      subjects: ['Algebra', 'Geometry', 'Calculus', 'Statistics'],
      highlights: ['Math Olympiad Gold', 'Problem Solving Experts', 'Research Projects'],
      staffLead: 'Mr. Arun Sharma'
    },
    {
      id: 'science',
      name: 'Science',
      icon: '🔬',
      description: 'Physics, Chemistry & Biology',
      faculty: '15 Scientists',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Lab Practicals'],
      highlights: ['Science Fair Winners', 'Research Publications', 'Innovation Projects'],
      staffLead: 'Dr. Priya Desai'
    },
    {
      id: 'social',
      name: 'Social Studies',
      icon: '🌍',
      description: 'History, Geography & Civics',
      faculty: '10 Scholars',
      subjects: ['History', 'Geography', 'Civics', 'Economics'],
      highlights: ['Heritage Project Leaders', 'Quiz Masters', 'Model UN Champions'],
      staffLead: 'Mr. Vikram Singh'
    },
    {
      id: 'languages',
      name: 'Languages',
      icon: '🗣️',
      description: 'Hindi, Sanskrit & Other Languages',
      faculty: '8 Language Experts',
      subjects: ['Hindi', 'Sanskrit', 'French'],
      highlights: ['Debate Finalists', 'Language Proficiency', 'Cultural Ambassadors'],
      staffLead: 'Ms. Anjali Nair'
    },
    {
      id: 'arts',
      name: 'Arts & Skills',
      icon: '🎨',
      description: 'Visual & Performing Arts',
      faculty: '6 Creative Professionals',
      subjects: ['Visual Arts', 'Music', 'Dance', 'Crafts'],
      highlights: ['Art Exhibition Winners', 'Music Performances', 'Talent Showcase'],
      staffLead: 'Mr. Rohan Kumar'
    }
  ];

  const curriculum = [
    {
      class: 'Classes I-V',
      title: 'Primary',
      focus: 'Foundation Building',
      description: 'Focus on developing basic numeracy, literacy, and critical thinking skills through play-based and activity-based learning.',
      features: [
        'Holistic Development',
        'Activity-Based Learning',
        'Personality Development',
        'Value Education',
        'Integrated Curriculum'
      ]
    },
    {
      class: 'Classes VI-VIII',
      title: 'Upper Primary',
      focus: 'Concept Mastery',
      description: 'Emphasis on conceptual understanding and application of knowledge across different subjects with increased focus on scientific and mathematical reasoning.',
      features: [
        'Subject Specialization',
        'Project-Based Learning',
        'Skill Development',
        'Leadership Programs',
        'Career Awareness'
      ]
    },
    {
      class: 'Classes IX-X',
      title: 'Secondary (CBSE)',
      focus: 'Board Preparation',
      description: 'Rigorous curriculum aligned with CBSE board standards. Focus on conceptual clarity and practical application with board examination preparation.',
      features: [
        'CBSE Aligned',
        'Board Exams',
        'Lab Practicals',
        'Science & Maths Focus',
        'Career Guidance'
      ]
    },
    {
      class: 'Classes XI-XII',
      title: 'Senior Secondary (CBSE)',
      focus: 'Higher Learning',
      description: 'Stream-based education (Science, Commerce, Humanities) with focus on competitive exams and higher education preparation.',
      features: [
        'Stream Selection',
        'Competitive Exams',
        'University Preparation',
        'Specialization',
        'Research Projects'
      ]
    }
  ];

  const scholars = [
    { rank: '1st', name: 'Arjun Verma', percentage: '98.2%', class: 'Class XII', icon: '🥇' },
    { rank: '2nd', name: 'Priya Sharma', percentage: '97.8%', class: 'Class XII', icon: '🥈' },
    { rank: '3rd', name: 'Rahul Patel', percentage: '97.4%', class: 'Class X', icon: '🥉' },
  ];

  const academicCalendar = [
    { month: 'April', event: 'Academic Year Begins', type: 'Start' },
    { month: 'May-June', event: 'Summer Activities & Camps', type: 'Activity' },
    { month: 'September', event: 'Mid-Term Examinations', type: 'Exam' },
    { month: 'October', event: 'Sports & Cultural Week', type: 'Event' },
    { month: 'December', event: 'Annual Examinations Begin', type: 'Exam' },
    { month: 'January', event: 'Results Declared', type: 'Result' },
    { month: 'February', event: 'Annual Day Celebrations', type: 'Event' },
    { month: 'March', event: 'Board Exams (Classes X, XII)', type: 'Exam' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 pt-32 pb-20">
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 mb-12">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(76, 139, 245, 0.1) 0%, transparent 50%)',
        }}></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-serif font-bold mb-4 text-white">Academics</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Excellence in education through comprehensive curriculum, experienced faculty, and modern teaching methodologies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-yellow-400 mx-auto mt-6"></div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="container mx-auto px-4 mb-20" id="curriculum">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">Our Curriculum</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">CBSE Curriculum following the latest educational guidelines</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {curriculum.map((item, idx) => (
            <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-sm font-bold text-af-blue dark:text-af-light uppercase tracking-widest">{item.class}</span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{item.title}</h3>
                  <p className="text-af-blue dark:text-af-light font-semibold mt-1">{item.focus}</p>
                </div>
                <BookOpen className="w-8 h-8 text-af-blue dark:text-af-light flex-shrink-0" />
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{item.description}</p>
              <div className="space-y-2">
                {item.features.map((feature, fidx) => (
                  <div key={fidx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Departments Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-16 mb-20" id="departments">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">Academic Departments</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Specialized subject departments with expert faculty</p>
          </div>

          <div className="space-y-4">
            {departments.map((dept) => (
              <div key={dept.id} className="bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 overflow-hidden hover:shadow-lg transition-all duration-300">
                <button
                  onClick={() => setExpandedDept(expandedDept === dept.id ? null : dept.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{dept.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{dept.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{dept.description} • {dept.faculty}</p>
                    </div>
                  </div>
                  <ArrowRight className={`w-6 h-6 text-af-blue dark:text-af-light transition-transform duration-300 ${expandedDept === dept.id ? 'rotate-90' : ''}`} />
                </button>

                {expandedDept === dept.id && (
                  <div className="px-6 py-6 border-t border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-600">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          <span>📖</span> Subjects Offered
                        </h4>
                        <ul className="space-y-2">
                          {dept.subjects.map((subject, idx) => (
                            <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
                              <span className="w-2 h-2 bg-af-blue dark:bg-af-light rounded-full"></span>
                              {subject}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="mb-4">
                          <h4 className="font-bold text-gray-900 dark:text-white mb-3">🏆 Achievements</h4>
                          <ul className="space-y-2">
                            {dept.highlights.map((highlight, idx) => (
                              <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                <span className="text-af-gold">★</span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-4 border-t border-gray-200 dark:border-gray-500">
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            <span className="font-bold text-gray-900 dark:text-white">Department Head:</span><br />
                            {dept.staffLead}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar Section */}
      <section className="container mx-auto px-4 mb-20" id="calendar">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">Academic Calendar 2024-25</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Important dates and events throughout the year</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {academicCalendar.map((event, idx) => {
            const typeColors = {
              'Start': 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
              'Activity': 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
              'Exam': 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
              'Event': 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
              'Result': 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'
            };
            const typeIcons = {
              'Start': '🚀',
              'Activity': '🎯',
              'Exam': '✏️',
              'Event': '🎉',
              'Result': '📊'
            };

            return (
              <div key={idx} className={`rounded-lg p-6 border-l-4 ${typeColors[event.type as keyof typeof typeColors]} border-l-af-blue`}>
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{typeIcons[event.type as keyof typeof typeIcons]}</span>
                  <div>
                    <p className="text-sm font-bold text-af-blue dark:text-af-light uppercase tracking-widest">{event.month}</p>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{event.event}</h3>
                    <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest`}>
                      {event.type}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Scholars Section */}
      <section className="bg-gradient-to-r from-af-blue to-blue-700 text-white rounded-2xl container mx-auto px-4 py-12 mb-20" id="scholars">
        <div className="text-center mb-12">
          <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
          <h2 className="text-4xl font-serif font-bold mb-2">Top Academic Achievers</h2>
          <p className="text-blue-100">Celebrating excellence and outstanding performance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {scholars.map((scholar, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-6xl mb-4">{scholar.icon}</div>
              <p className="text-yellow-300 font-bold text-sm uppercase tracking-widest mb-2">Rank #{scholar.rank}</p>
              <h3 className="text-2xl font-bold mb-2">{scholar.name}</h3>
              <p className="text-blue-100 text-sm mb-3">{scholar.class}</p>
              <div className="bg-white/20 rounded-lg py-2 px-4">
                <p className="text-2xl font-bold text-yellow-300">{scholar.percentage}</p>
                <p className="text-xs text-blue-100">Aggregate Score</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Highlights */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: '👨‍🏫', title: 'Expert Faculty', desc: '85+ Qualified & Experienced Teachers' },
            { icon: '📚', title: 'Rich Library', desc: '10,000+ Books & Digital Resources' },
            { icon: '🔬', title: 'Modern Labs', desc: 'State-of-the-art Science Laboratories' },
            { icon: '💻', title: 'Tech-Enabled', desc: 'Smart Classrooms & Digital Learning' }
          ].map((item, idx) => (
            <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 text-center border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-af-blue to-blue-700 text-white rounded-2xl container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">Ready to Excel?</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Join our community of learners and achievers. Explore our academic programs and discover your potential.
        </p>
        <button className="bg-white text-af-blue hover:bg-blue-50 px-8 py-3 rounded-lg font-bold uppercase tracking-widest transition-colors duration-300">
          Explore Admissions
        </button>
      </section>
    </div>
  );
};

export default AcademicsPage;
