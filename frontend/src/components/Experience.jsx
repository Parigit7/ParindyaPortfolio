import React from 'react'
import { Calendar, ExternalLink, Github, Code } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      title: 'Healthify - Personal Healthcare Monitoring System',
      type: 'Final Year Group Project',
      period: '11/2025 – 03/2026',
      technologies: ['Spring Boot', 'Java', 'React', 'Tailwind CSS', 'MySQL', 'REST APIs'],
      tools: ['GitHub', 'Figma', 'Trello'],
      description: 'Developed a healthcare monitoring system with secure role-based authentication using Spring Security and JWT. Implemented patient-doctor management features including clinic bookings, reminders, and QR-based prescription verification.',
      color: 'from-blue-500 to-cyan-500',
      icon: '🏥',
      image: 'h.jpeg',
      links: { 
        github: 'https://github.com/IndikaMadhushan/Healthify-FrontEnd.git',
        backend: 'https://github.com/IndikaMadhushan/Healthify-Backend.git',
        demo: 'https://healthify.dev/' 
      }
    },
    {
      title: 'IDEA HUB – Digital Marketing Agency Management System',
      type: 'Personal Project',
      period: '07/2025 – 11/2025',
      technologies: ['ReactJS', 'Tailwind CSS', 'Spring Boot', 'MySQL', 'JWT'],
      tools: ['GitHub', 'VS Code'],
      description: 'Full-stack web application with role-based authentication and comprehensive task management. Built responsive UI with React and integrated salary management system with MySQL.',
      color: 'from-purple-500 to-pink-500',
      icon: '💡',
      image: 'i.jpeg',
      links: { github: 'https://github.com/Parigit7/DIGITAL-MARKETING.git' },
      codeButtonLabel: 'Code'
    },
    {
      title: 'Point of Sale (POS) System - Desktop Application',
      type: 'Group Project',
      period: '09/2025 – 01/2026',
      technologies: ['C#', '.NET Framework', 'WinForms', 'SQL'],
      tools: ['GitHub', 'Visual Studio'],
      description: 'Desktop-based POS system for sales processing, billing automation, and real-time inventory management. Implemented role-based authorization and loyalty system integration.',
      color: 'from-orange-500 to-red-500',
      icon: '💳',
      image: 'p.jpeg',
      links: { github: 'https://github.com/JayaniAnu10/pos-system.git' },
      codeButtonLabel: 'Code'
    },
    {
      title: 'Symphony Music Institute – Web Application',
      type: 'Client Project',
      period: '2025',
      technologies: ['React', 'Tailwind CSS', 'Express.js'],
      tools: ['GitHub', 'Figma'],
      description: 'Responsive React-based website showcasing musicians, courses, and institute information. Ensured cross-device compatibility with modern UI components and clean, maintainable code.',
      color: 'from-green-500 to-emerald-500',
      icon: '🎵',
      image: 's.jpeg',
      links: { demo: 'https://symphony-linux.netlify.app/', github: 'https://github.com/gomes-milindu/symphony-music-02.git' },
      codeButtonLabel: 'Code'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30, y: 20 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      x: 10,
      boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)',
      transition: { duration: 0.3 },
    },
  }

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

   const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="experience" className="py-16 bg-gradient-to-b from-white via-pink-50 to-purple-50 dark:from-slate-950 dark:to-slate-900 px-4">
      <div className="max-w-6xl mx-auto w-full">
        {/* <div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">Experience & Projects</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Real-world projects showcasing my full-stack development expertise and technical skills
          </p>
        </div> */}

        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={item}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            A comprehensive toolkit of modern technologies I use to build applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg flex flex-col h-full cursor-pointer group"
            >
              {/* Hero Image */}
              <div
                className={`w-full h-52 relative overflow-hidden ${exp.image ? '' : `bg-gradient-to-br ${exp.color}`}`}
              >
                {exp.image ? (
                  <img 
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500">
                    <span className="text-7xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">{exp.icon}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>

              {/* Content */}
              <div className="flex-grow p-6">
                <div className="mb-3">
                  <div className="flex flex-wrap gap-3 items-center mb-3">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full font-bold">
                      {exp.type}
                    </span>
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 dark:bg-slate-800 rounded-lg text-gray-700 dark:text-gray-300">
                   
                      <span className="text-xs font-semibold whitespace-nowrap">{exp.period}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-5 text-sm leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-5">
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wider">Tech</h4>
                  <div className="flex gap-1 flex-wrap mb-3">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 text-blue-700 dark:text-blue-300 text-xs rounded-full font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-xs font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wider">Tools</h4>
                  <div className="flex gap-1 flex-wrap">
                    {exp.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950 dark:to-emerald-950 text-green-700 dark:text-green-300 text-xs rounded-full font-semibold"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Action Cards */}
              <div className="px-6 pb-6 pt-4 border-t border-gray-200 dark:border-slate-700 flex flex-row gap-3">
                {exp.links.demo && (
                  <a 
                    href={exp.links.demo} 
                    className="flex-1 group relative overflow-hidden rounded-lg p-3 text-gray-900 dark:text-white transition hover:bg-gray-100 dark:hover:bg-slate-800 flex items-center justify-center flex-col"
                  >
                    <div className="relative flex items-center justify-center w-8 h-8 flex-shrink-0 mb-1">
                      <ExternalLink size={18} />
                    </div>
                    <div className="relative text-center">
                      <div className="font-bold text-xs">Live Demo</div>
                    </div>
                  </a>
                )}
                {exp.links.github && (
                  <a 
                    href={exp.links.github} 
                    className="flex-1 group relative overflow-hidden rounded-lg p-3 text-gray-900 dark:text-white transition hover:bg-gray-100 dark:hover:bg-slate-800 flex items-center justify-center flex-col"
                  >
                    <div className="relative flex items-center justify-center w-8 h-8 flex-shrink-0 mb-1">
                      <Github size={18} />
                    </div>
                    <div className="relative text-center">
                      <div className="font-bold text-xs">{exp.codeButtonLabel || 'Frontend Code'}</div>
                    </div>
                  </a>
                )}
                {exp.links.backend && (
                  <a 
                    href={exp.links.backend} 
                    className="flex-1 group relative overflow-hidden rounded-lg p-3 text-gray-900 dark:text-white transition hover:bg-gray-100 dark:hover:bg-slate-800 flex items-center justify-center flex-col"
                  >
                    <div className="relative flex items-center justify-center w-8 h-8 flex-shrink-0 mb-1">
                      <Github size={18} />
                    </div>
                    <div className="relative text-center">
                      <div className="font-bold text-xs">Backend Code</div>
                    </div>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
