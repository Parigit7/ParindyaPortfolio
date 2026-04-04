import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import '../styles/hero.css'

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const imageRef = useRef(null)

  const fullName = 'I am Parindya Hewage'
  const roles = ['Full Stack Developer', 'Web Engineer', 'Problem Solver', 'Tech Enthusiast']

  // Typewriter effect
  useEffect(() => {
    if (!isTyping) return

    if (displayedText.length < fullName.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullName.slice(0, displayedText.length + 1))
      }, 60)

      return () => clearTimeout(timer)
    } else {
      setIsTyping(false)
    }
  }, [displayedText, isTyping])

  // Rotating roles effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Mouse movement parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!imageRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 10
      const y = (e.clientY / window.innerHeight - 0.5) * 10
      imageRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, y: -30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      y: -8,
      boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Curvy Background SVG */}
      <svg className="absolute top-0 right-0 opacity-10 dark:opacity-5" viewBox="0 0 1440 320" style={{ height: '100%', width: '100%', position: 'absolute', top: 0, right: 0 }}>
        <path fill="url(#gradient)" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,144C672,160,768,224,864,224C960,224,1056,160,1152,144C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>

      {/* Bottom Curvy Background */}
      <svg className="absolute bottom-0 left-0 opacity-10 dark:opacity-5" viewBox="0 0 1440 320" style={{ height: '100%', width: '100%', position: 'absolute', bottom: 0, left: 0 }}>
        <path fill="url(#gradient2)" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,176C384,171,480,181,576,197.3C672,213,768,235,864,224C960,213,1056,171,1152,160C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>

      <motion.div className="max-w-5xl mx-auto text-center relative z-10" variants={containerVariants} initial="hidden" animate="visible">

        {/* Extra Large Profile Picture with Motion Effects */}
        <motion.div className="mb-12 flex justify-center" variants={imageVariants}>
          <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96" ref={imageRef}>
            {/* Rotating Ring 1 */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-600 border-r-purple-600 animate-spin" style={{ animationDuration: '20s' }}></div>
            
            {/* Rotating Ring 2 */}
            <div className="absolute -inset-6 rounded-full border-2 border-transparent border-b-blue-500 border-l-purple-500 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
            
            {/* Glow Effect Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-20 blur-2xl animate-pulse"></div>
            
            {/* Static Profile Image Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <img
                src="./profile.png"
                alt="Parindya Hewage"
                className="w-full h-full object-cover"
              />
              
              {/* Status Indicator */}
              <motion.div 
                className="absolute bottom-4 right-4 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
            </div>

            {/* Light Rays */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-2 h-12 bg-gradient-to-b from-blue-400 to-transparent opacity-30 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute bottom-0 right-0 transform translate-x-8 w-2 h-12 bg-gradient-to-t from-purple-400 to-transparent opacity-30 rounded-full blur-sm animate-pulse"></div>
            <div className="absolute bottom-0 left-0 transform -translate-x-8 w-2 h-12 bg-gradient-to-t from-blue-400 to-transparent opacity-30 rounded-full blur-sm animate-pulse"></div>
          </div>
        </motion.div>
        
        <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-1 text-gray-900 dark:text-white min-h-[120px]">
          {displayedText}
          {isTyping && <span className="animate-pulse">|</span>}
        </motion.h2>

        <motion.p variants={itemVariants} className="text-2xl md:text-3xl font-semibold mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {roles[currentRoleIndex]}
          </span>
          <span className="ml-2 inline-block w-1 h-8 bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
        </motion.p>
        
        <motion.div variants={containerVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="#contact"
            variants={buttonVariants}
            whileHover="hover"
            className="px-8 py-3 border-2 border-gray-300 dark:border-slate-700 hover:border-gray-400 dark:hover:border-slate-600 text-gray-900 dark:text-white rounded-lg font-semibold transition flex items-center justify-center gap-2 cursor-pointer"
          >
            Get in Touch
          </motion.a>
          <motion.a
            href="/PARINDYA_HEWAGE.pdf"
            download="PARINDYA_HEWAGE.pdf"
            variants={buttonVariants}
            whileHover="hover"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition flex items-center justify-center gap-2"
          >
             Download CV
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
