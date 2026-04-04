import React from 'react'
import { Calendar, BookOpen, Award } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Education() {
  const educationHistory = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University Of Ruhuna',
      period: '2008 – 2021',
      location: 'Matara',
      gpa: '3.55',
      icon: BookOpen,
      details: [
        'Relevant Coursework: Data Structures and Algorithms, Object-Oriented Programming, Database Management, Rapid Application Development'
      ]
    },
    {
      degree: 'Diploma in Information Technology',
      institution: 'ESOFT Metro Campus',
      period: '2023 – 2024',
      location: 'Colombo',
      icon: Award,
      details: []
    },
    {
      degree: 'GCE Advanced Level - Mathematics Stream',
      institution: 'C.W.W. Kannangara Central College Matugama',
      period: '2023 – Present',
      location: 'Matara',
      rank: '191',
      icon: Award,
      details: []
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
      y: -5,
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
    <section id="education" className="py-16  dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 px-4">
      <div className="max-w-5xl mx-auto w-full">
        {/* <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={headerVariants}>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">Education</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Academic background and certifications
          </p>
        </motion.div> */}

        <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={item}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-center max-w-2xl mx-auto mb-16"
                >
                  <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                   <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Education</span>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    A comprehensive toolkit of modern technologies I use to build applications
                  </p>
                </motion.div>

        <motion.div 
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {educationHistory.map((edu, idx) => {
            const Icon = edu.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover="hover"
                className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 rounded-lg p-6 border-l-4 border-blue-600 dark:border-blue-400 cursor-pointer"
              >
                <motion.div className="flex items-start gap-4 mb-3" variants={itemVariants}>
                  <div className="p-3 bg-blue-600 dark:bg-blue-500 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="flex-grow">
                    <motion.h3 className="text-2xl font-bold text-gray-900 dark:text-white" variants={itemVariants}>{edu.degree}</motion.h3>
                    <motion.p className="text-lg text-blue-600 dark:text-blue-400" variants={itemVariants}>{edu.institution}</motion.p>
                  </div>
                </motion.div>

                <motion.div className="flex flex-wrap gap-6 text-sm text-gray-700 dark:text-gray-400 ml-16 mb-3" variants={itemVariants}>
                  <div className="flex items-center gap-2">
                  
                    <span>{edu.period}</span>
                  </div>
                  {edu.location && (
                    <div>
                      <span className="font-semibold">Location:</span> {edu.location}
                    </div>
                  )}
                  {edu.gpa && (
                    <div>
                      <span className="font-semibold">GPA:</span> {edu.gpa}
                    </div>
                  )}
                  {edu.rank && (
                    <div>
                      <span className="font-semibold">Rank:</span> {edu.rank}
                    </div>
                  )}
                </motion.div>

                {edu.details.length > 0 && (
                  <motion.div className="ml-16 mt-3 space-y-2" variants={itemVariants}>
                    {edu.details.map((detail, i) => (
                      <motion.div 
                        key={i} 
                        className="flex gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-blue-600 dark:text-blue-400 font-bold flex-shrink-0">•</span>
                        <p className="text-gray-700 dark:text-gray-400">{detail}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* <motion.div 
          className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-lg border border-blue-200 dark:border-blue-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.02 }}
        > */}
          {/* <motion.h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2" variants={headerVariants}>Continuous Learning</motion.h3>
          <motion.p className="text-gray-700 dark:text-gray-300">
            Committed to expanding knowledge through advanced courses, certifications, and hands-on projects in modern software development practices.
          </motion.p> */}
        {/* </motion.div> */}
      </div>
    </section>
  )
}
