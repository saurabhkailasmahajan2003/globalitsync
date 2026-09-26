import { useState } from 'react'
import Footer from '../components/Footer.jsx'
import SEO from '../components/SEO.jsx'
import { Link } from 'react-router-dom'
import devopsImage from '../assets/devops.png'
import webDevImage from '../assets/websitedev.png'
import dataScienceImage from '../assets/datascience.png'
import cyberSecurityImage from '../assets/cybersecurity.png'

export default function InternshipPage() {
  const [selectedCert, setSelectedCert] = useState(null)
  const courses = [
    {
      title: 'DevOps',
      price: '249',
      isBestseller: true,
      description: 'Learn modern CI/CD pipelines, containerization with Docker and Kubernetes, and cloud infrastructure management.',
      image: devopsImage,
      features: [
        'Real-world CI/CD pipelines',
        'Docker & Kubernetes mastery',
        'Cloud infrastructure (AWS/Azure)',
        'Live project deployment'
      ],
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: 'Web Development',
      price: '199',
      isBestseller: false,
      description: 'Master frontend and backend technologies including React, Node.js, databases, and responsive design.',
      image: webDevImage,
      features: [
        'React & Modern Frontend',
        'Node.js Backend & APIs',
        'Database Integration',
        'Full-stack applications'
      ],
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: 'Cyber Security',
      price: '249',
      isBestseller: false,
      description: 'Explore ethical hacking, network security, cryptography, and securing modern web applications against threats.',
      image: cyberSecurityImage,
      features: [
        'Ethical Hacking basics',
        'Network & Web Security',
        'Threat modeling & defense',
        'Security audits'
      ],
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: 'Data Science',
      price: '239',
      isBestseller: false,
      description: 'Dive into machine learning, data visualization, statistical analysis, and Python-based data engineering.',
      image: dataScienceImage,
      features: [
        'Python for Data Science',
        'Machine Learning algorithms',
        'Data Visualization',
        'Predictive modeling'
      ],
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ]

  return (
    <>
      <SEO
        title="GlobalItSync Academy - Internships & Certifications"
        description="Join our premium internship and certification programs in DevOps, Web Development, Cyber Security, and Data Science."
      />
      <section className="relative overflow-hidden bg-slate-50 py-10 sm:py-12 lg:py-16">
        {/* Background decorative elements */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-violet-600 to-purple-600 opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-gc-blue">GlobalItSync Academy</span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gc-navy sm:text-5xl lg:text-6xl">
              Accelerate Your Career
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Get hands-on experience and earn highly respected professional certifications. Master the most in-demand technology sectors with expert mentorship.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl sm:mt-20">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-4 xl:gap-6">
              {courses.map((course) => (
                <div
                  key={course.title}
                  className={`relative flex flex-col rounded-3xl p-7 lg:p-8 transition-colors duration-300 ${course.isBestseller
                    ? 'bg-gradient-to-br from-gc-navy to-slate-900 border border-slate-700 shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-white'
                    : 'bg-white border border-slate-200 shadow-sm hover:border-gc-blue/30 hover:shadow-md'
                    }`}
                >
                  {course.isBestseller && (
                    <div className="absolute -top-3.5 left-8 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-400 to-purple-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Bestseller
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-2xl ${course.isBestseller ? 'bg-white/10 text-violet-400' : 'bg-slate-50 text-gc-blue'}`}>
                      {course.icon}
                    </div>
                    <div className="text-right flex flex-col">
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${course.isBestseller ? 'text-slate-400' : 'text-slate-400'}`}>Certification</span>
                      <span className={`text-3xl font-extrabold tracking-tight ${course.isBestseller ? 'text-white' : 'text-gc-navy'}`}>
                        Rs. {course.price}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold ${course.isBestseller ? 'text-white' : 'text-gc-navy'}`}>{course.title}</h3>
                    <p className={`mt-3 text-sm leading-6 ${course.isBestseller ? 'text-slate-300' : 'text-slate-500'}`}>
                      {course.description}
                    </p>
                  </div>

                  <div className={`mt-8 mb-8 flex-1 border-t pt-6 ${course.isBestseller ? 'border-white/10' : 'border-slate-100'}`}>
                    <ul role="list" className="space-y-4 text-sm">
                      {course.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3 items-start">
                          <svg className={`h-5 w-5 flex-none mt-0.5 ${course.isBestseller ? 'text-violet-400' : 'text-gc-blue'}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                          </svg>
                          <span className={course.isBestseller ? 'text-slate-200' : 'text-slate-600'}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto flex gap-3">
                    <a
                      href="https://forms.gle/gqkLaPaCgm2V7YS59"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-describedby={`tier-${course.title}`}
                      className={`block flex-[2] rounded-xl px-4 py-3 text-center text-sm font-bold shadow-sm transition-all ${course.isBestseller
                        ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white hover:from-violet-400 hover:to-purple-400'
                        : 'bg-gc-navy text-white hover:bg-slate-800'
                        }`}
                    >
                      Apply Now
                    </a>
                    {course.image && (
                      <button
                        onClick={() => setSelectedCert(course.image)}
                        className={`block flex-1 rounded-xl px-4 py-3 text-center text-sm font-bold transition-colors cursor-pointer ${course.isBestseller
                          ? 'bg-white/10 text-white hover:bg-white/20'
                          : 'bg-slate-100 text-gc-navy hover:bg-slate-200'
                          }`}
                      >
                        View
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gc-navy/80 backdrop-blur-sm p-4 sm:p-6 transition-opacity">
          <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white">
              <h3 className="text-lg font-bold text-gc-navy">Sample Certificate</h3>
              <button
                onClick={() => setSelectedCert(null)}
                className="rounded-full p-2 text-slate-400 hover:text-gc-navy hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-auto bg-slate-50 p-6 flex justify-center items-center">
              <img src={selectedCert} alt="Certificate Preview" className="max-w-full h-auto rounded shadow-sm" />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}
