import Footer from '../components/Footer.jsx'
import SEO from '../components/SEO.jsx'
import { Link } from 'react-router-dom'

export default function InternshipPage() {
  const courses = [
    {
      title: 'DevOps',
      description: 'Learn modern CI/CD pipelines, containerization with Docker and Kubernetes, and cloud infrastructure management.',
      icon: (
        <svg className="w-8 h-8 text-gc-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: 'Web Development',
      description: 'Master frontend and backend technologies including React, Node.js, databases, and responsive design.',
      icon: (
        <svg className="w-8 h-8 text-gc-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: 'Cyber Security',
      description: 'Explore ethical hacking, network security, cryptography, and securing modern web applications against threats.',
      icon: (
        <svg className="w-8 h-8 text-gc-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: 'Data Science',
      description: 'Dive into machine learning, data visualization, statistical analysis, and Python-based data engineering.',
      icon: (
        <svg className="w-8 h-8 text-gc-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ]

  return (
    <>
      <SEO 
        title="Internship Programs - GlobalItSync"
        description="Join our internship programs in DevOps, Web Development, Cyber Security, and Data Science."
      />
      <section className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gc-navy sm:text-5xl lg:text-6xl">
              Accelerate Your Career with Our Internship Programs
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Get hands-on experience working on real-world projects. We offer specialized training and mentorship in the most in-demand technology sectors.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {courses.map((course) => (
                <div
                  key={course.title}
                  className="relative flex flex-col items-start gap-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="rounded-xl bg-slate-50 p-3">
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gc-navy">
                    {course.title}
                  </h3>
                  <p className="text-sm leading-6 text-slate-600 flex-1">
                    {course.description}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center text-sm font-semibold text-gc-blue hover:text-blue-700"
                  >
                    Apply Now
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
