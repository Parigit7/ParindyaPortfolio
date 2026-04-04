import React from 'react'
import { Code2, Layout, Server, Database, Wrench } from 'lucide-react'
import { motion } from 'framer-motion'
import {
  SiSpringboot, SiSpring, SiJavascript,
  SiReact, SiTailwindcss,
  SiMysql, SiMongodb,
  SiDocker, SiGit, SiPostman, SiC, SiGithub, SiTrello, SiLinux
} from "react-icons/si"
import { FaKey } from "react-icons/fa"
import { TbApi } from "react-icons/tb"

export default function Skills() {
  // Map skill names to their icon components
  const skillIconMap = {
    'Java': <SiSpring size={20} />,
    'JavaScript': <SiJavascript size={20} />,
    'C': <SiC size={20} />,
    'ReactJS': <SiReact size={20} />,
    'Tailwind CSS': <SiTailwindcss size={20} />,
    'Spring Boot': <SiSpringboot size={20} />,
    'REST APIs': <TbApi size={20} />,
    'JWT Authentication': <FaKey size={20} />,
    'MySQL': <SiMysql size={20} />,
    'MongoDB': <SiMongodb size={20} />,
    'Git': <SiGit size={20} />,
    'GitHub': <SiGithub size={20} />,
    'Trello': <SiTrello size={20} />,
    'Docker': <SiDocker size={20} />,
    'Linux': <SiLinux size={20} />,
    'Postman': <SiPostman size={20} />
  }

  const skillCategories = [
    {
      icon: Code2,
      name: 'Programming Languages',
      skills: ['Java', 'JavaScript', 'C']
    },
    {
      icon: Layout,
      name: 'Frontend Technologies',
      skills: ['ReactJS', 'Tailwind CSS']
    },
    {
      icon: Server,
      name: 'Backend Technologies',
      skills: ['Spring Boot', 'REST APIs', 'JWT Authentication']
    },
    {
      icon: Database,
      name: 'Database Management',
      skills: ['MySQL', 'MongoDB']
    },
    {
      icon: Wrench,
      name: 'Other Tools',
      skills: ['Git', 'GitHub', 'Trello', 'Docker', 'Linux', 'Postman']
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-white via-purple-50 to-blue-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={item}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            A comprehensive toolkit of modern technologies I use to build applications
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12"
        >
          {skillCategories.map((category, idx) => {
            const Icon = category.icon

            return (
              <motion.div
                key={idx}
                variants={item}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)' }}
                className="group relative rounded-2xl p-6 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Background Effect */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-500 opacity-5 dark:opacity-10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Category Icon */}
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:shadow-xl transition-all">
                    <Icon size={24} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-5">
                    {category.name}
                  </h3>

                  {/* Skills with Icons */}
                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        variants={item}
                        className="flex items-center gap-3 group/skill"
                      >
                        {/* Tech Icon */}
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-slate-700 group-hover/skill:bg-blue-100 dark:group-hover/skill:bg-blue-900 group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-all duration-300 shadow-sm">
                          {skillIconMap[skill] || skill.charAt(0)}
                        </div>
                        
                        {/* Skill Name */}
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* BOTTOM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative rounded-3xl overflow-hidden p-10 md:p-14 text-white bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-3">Always Learning 🚀</h3>
            <p className="text-lg opacity-90">
              I'm passionate about exploring cutting-edge technologies and continuously improving my craft to deliver exceptional solutions.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
