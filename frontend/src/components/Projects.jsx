import React from 'react'
import { ExternalLink, Github, Code } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      title: 'Healthify',
      subtitle: 'Personal Healthcare Monitoring System',
      description: 'A comprehensive healthcare platform with secure authentication, patient-doctor management, clinic bookings, and QR-based prescription verification.',
      longDescription: 'Built a full-featured healthcare system using Spring Boot and React with JWT authentication, clinic management module, and QR-based prescription system.',
      tags: ['Spring Boot', 'React', 'MySQL', 'JWT', 'QR Code'],
      color: 'from-blue-500 to-cyan-500',
      icon: '🏥',
      image: 'h.jpeg',
      links: { 
        demo: 'https://healthify.dev/',
        github: 'https://github.com/IndikaMadhushan/Healthify-FrontEnd.git',
        backend: 'https://github.com/IndikaMadhushan/Healthify-Backend.git'
      }
    },
    {
      title: 'IDEA HUB',
      subtitle: 'Digital Marketing Agency Management',
      description: 'Full-stack application with role-based access, task management, employee tracking, and salary management system.',
      longDescription: 'Developed an agency management system with admin and employee dashboards, task tracking, and integrated salary management using MySQL.',
      tags: ['React', 'Spring Boot', 'MySQL', 'JWT'],
      color: 'from-purple-500 to-pink-500',
      icon: '💡',
      image: 'i.jpeg',
      links: { github: 'https://github.com/Parigit7/DIGITAL-MARKETING.git' },
      codeButtonLabel: 'Code'
    },
    {
      title: 'POS System',
      subtitle: 'Point of Sale Desktop Application',
      description: 'Desktop-based system for sales processing, inventory management, billing automation, and loyalty program integration.',
      longDescription: 'Created a complete POS solution with real-time inventory tracking, role-based access control, and integration with loyalty program management.',
      tags: ['C#', '.NET', 'WinForms', 'SQL'],
      color: 'from-orange-500 to-red-500',
      icon: '💳',
      image: 'p.jpeg',
      links: { demo: '#', github: 'https://github.com/JayaniAnu10/pos-system.git' },
      codeButtonLabel: 'Code'
    },
    {
      title: 'Symphony Music Institute',
      subtitle: 'Institute Website',
      description: 'Responsive React-based website showcasing courses, instructors, and institute information with modern UI design.',
      longDescription: 'Built a modern, responsive website for a music institute with course listings, instructor profiles, and contact integration.',
      tags: ['React', 'Tailwind CSS', 'Express.js'],
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      y: -10,
      boxShadow: '0 25px 50px rgba(59, 130, 246, 0.2)',
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

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    },
    tap: { scale: 0.98 },
  }

  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-white to-purple-50 dark:bg-slate-950 px-4">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 text-center">My Projects</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Showcase of recent projects built with modern technologies
          </p>
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover="hover"
              className="group"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-purple-100/30 to-pink-100/30 dark:from-slate-800/30 dark:via-slate-800/30 dark:to-slate-900/30 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 blur-lg"></div>
              
              {/* Card */}
              <div className="relative bg-white dark:bg-slate-900/95 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Image Section */}
                <div className="relative w-full h-56 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700">
                  {project.image ? (
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${project.color}`}>
                      <span className="text-7xl group-hover:scale-125 transition-transform duration-300">{project.icon}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="flex-grow p-7">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                      {project.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                    {project.longDescription}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex gap-2 mb-6 flex-wrap">
                    {project.tags.map((tag, i) => (
                      <motion.span 
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-950 dark:to-purple-950 text-blue-700 dark:text-blue-300 text-xs rounded-full font-semibold shadow-sm hover:shadow-md transition-shadow"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="px-7 pb-7 pt-5 border-t border-blue-200/50 dark:border-slate-700/50 flex flex-row gap-3 bg-gradient-to-r from-white/50 to-purple-50/50 dark:from-slate-900/50 dark:to-slate-800/50">
                  {project.links.demo && (
                    <motion.a 
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 relative rounded-lg p-3 text-gray-900 dark:text-white bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-950 dark:to-blue-900 hover:shadow-lg transition flex items-center justify-center flex-col font-bold text-xs"
                    >
                      <ExternalLink size={18} className="mb-1" />
                      Live Demo
                    </motion.a>
                  )}
                  {project.links.github && (
                    <motion.a 
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 relative rounded-lg p-3 text-gray-900 dark:text-white bg-gradient-to-r from-purple-100 to-purple-50 dark:from-purple-950 dark:to-purple-900 hover:shadow-lg transition flex items-center justify-center flex-col font-bold text-xs"
                    >
                      <Github size={18} className="mb-1" />
                      {project.codeButtonLabel || 'Frontend'}
                    </motion.a>
                  )}
                  {project.links.backend && (
                    <motion.a 
                      href={project.links.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 relative rounded-lg p-3 text-gray-900 dark:text-white bg-gradient-to-r from-pink-100 to-pink-50 dark:from-pink-950 dark:to-pink-900 hover:shadow-lg transition flex items-center justify-center flex-col font-bold text-xs"
                    >
                      <Code size={18} className="mb-1" />
                      Backend
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
