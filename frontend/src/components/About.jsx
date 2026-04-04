import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
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

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header - Left Aligned */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.3 }} 
          variants={headerVariants}
          className="mb-16"
        >
          <div className="flex items-baseline gap-4">
            <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full"></div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Me</span>
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg mt-6 max-w-2xl">
            Full-stack developer passionate about building scalable solutions with clean, efficient code
          </p>
        </motion.div>

        {/* Main Content - Single Column with Modern Layout */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="space-y-8"
        >
          {/* About Content Card */}
          <motion.div 
            variants={itemVariants}
            className="bg-white dark:bg-slate-800 rounded-3xl p-10 md:p-14 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition duration-300"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">Who I Am</h3>
            
            <div className="space-y-4 max-w-3xl">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                I am a <span className="font-semibold text-blue-600 dark:text-blue-400">Computer Science undergraduate</span> at the <span className="font-semibold text-blue-600 dark:text-blue-400">University of Ruhuna</span> with a strong interest in <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">full-stack development</span>.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                I have hands-on experience with <span className="font-semibold text-purple-600 dark:text-purple-400">React</span>, <span className="font-semibold text-purple-600 dark:text-purple-400">Java</span>, <span className="font-semibold text-purple-600 dark:text-purple-400">Spring Boot</span>, <span className="font-semibold text-purple-600 dark:text-purple-400"></span>, and <span className="font-semibold text-purple-600 dark:text-purple-400">RESTful APIs</span>. Skilled in developing responsive user interfaces and CRUD-based backend services.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Seeking a <span className="font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">Software Engineering Internship</span> to gain industry experience and contribute to scalable, real-world applications.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
