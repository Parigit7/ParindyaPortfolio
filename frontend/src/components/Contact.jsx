// import React, { useState } from 'react'
// import { Mail, Github, Linkedin, Phone, MapPin } from 'lucide-react'
// import { motion } from 'framer-motion'

// export default function Contact() {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' })

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('Form submitted:', formData)
//     setFormData({ name: '', email: '', message: '' })
//   }

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: 'easeOut' },
//     },
//   }

//   const headerVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: 'easeOut' },
//     },
//   }

//   const inputVariants = {
//     focus: {
//       boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
//       transition: { duration: 0.2 },
//     },
//   }

//   const buttonVariants = {
//     hover: {
//       scale: 1.02,
//       boxShadow: '0 10px 20px rgba(37, 99, 235, 0.3)',
//     },
//     tap: { scale: 0.98 },
//   }

//   const socialVariants = {
//     hover: {
//       scale: 1.1,
//       rotate: 5,
//       boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
//     },
//     tap: { scale: 0.95 },
//   }

//   return (
//     <section id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-950 dark:to-slate-900 px-4">
//       <div className="max-w-6xl mx-auto w-full">
//         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={headerVariants}>
//           <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">Get In Touch</h2>
//           <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
//             Have a project in mind or just want to chat? Feel free to reach out. I would love to hear from you!
//           </p>
//         </motion.div>
        
//         <motion.div 
//           className="grid md:grid-cols-2 gap-12 items-start"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={containerVariants}
//         >
//           {/* Left Side - Contact Info */}
//           <motion.div className="space-y-6" variants={itemVariants}>
//             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
            
//             {/* Email */}
//             <motion.a 
//               href="mailto:parindyahewage7@gmail.com"
//               className="group p-6 bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-400 transition duration-300"
//               variants={itemVariants}
//               whileHover={{ y: -5 }}
//             >
//               <div className="flex items-center gap-4">
//                 <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl flex-shrink-0">
//                   <Mail size={28} />
//                 </div>
//                 <div className="flex-1">
//                   <h4 className="font-bold text-gray-900 dark:text-white mb-1">Email</h4>
//                   <p className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">parindyahewage7@gmail.com</p>
//                 </div>
//               </div>
//             </motion.a>

//             {/* Phone */}
//             <motion.a 
//               href="tel:+94717474417"
//               className="group p-6 bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 hover:shadow-xl hover:border-green-400 dark:hover:border-green-400 transition duration-300"
//               variants={itemVariants}
//               whileHover={{ y: -5 }}
//             >
//               <div className="flex items-center gap-4">
//                 <div className="p-4 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl flex-shrink-0">
//                   <Phone size={28} />
//                 </div>
//                 <div className="flex-1">
//                   <h4 className="font-bold text-gray-900 dark:text-white mb-1">Phone</h4>
//                   <p className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition">+94 71 747 4417</p>
//                 </div>
//               </div>
//             </motion.a>

//             {/* Location */}
//             <motion.div 
//               className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 hover:shadow-xl hover:border-purple-400 dark:hover:border-purple-400 transition duration-300"
//               variants={itemVariants}
//               whileHover={{ y: -5 }}
//             >
//               <div className="flex items-center gap-4">
//                 <div className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl flex-shrink-0">
//                   <MapPin size={28} />
//                 </div>
//                 <div className="flex-1">
//                   <h4 className="font-bold text-gray-900 dark:text-white mb-1">Location</h4>
//                   <p className="text-sm text-gray-700 dark:text-gray-300">Matugama, Kalutara</p>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Social Links */}
//             <motion.div 
//               className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl border border-gray-200 dark:border-slate-700"
//               variants={itemVariants}
//             >
//               <h4 className="font-bold text-gray-900 dark:text-white mb-5">Connect with Me</h4>
//               <div className="flex gap-4">
//                 <motion.a 
//                   href="https://github.com/Parigit7"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl hover:shadow-lg transition"
//                   whileHover={{ scale: 1.1, rotate: 5 }}
//                   whileTap={{ scale: 0.95 }}
//                   title="GitHub"
//                 >
//                   <Github size={24} />
//                 </motion.a>
//                 <motion.a 
//                   href="https://linkedin.com/in/parindya-hewage"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg transition"
//                   whileHover={{ scale: 1.1, rotate: 5 }}
//                   whileTap={{ scale: 0.95 }}
//                   title="LinkedIn"
//                 >
//                   <Linkedin size={24} />
//                 </motion.a>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Right Side - Contact Form */}
//           <motion.form 
//             onSubmit={handleSubmit} 
//             className="w-full bg-white dark:bg-slate-800 p-8 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition duration-300"
//             variants={itemVariants}
//           >
//             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Send Me a Message</h3>
            
//             <div className="space-y-6">
//               <motion.div variants={itemVariants}>
//                 <motion.label className="block text-gray-900 dark:text-white font-semibold mb-3" variants={itemVariants}>
//                   Full Name
//                 </motion.label>
//                 <motion.input
//                   type="text"
//                   name="name"
//                   placeholder="Your name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-5 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-600 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:focus:border-blue-400 transition duration-300"
//                   variants={inputVariants}
//                   whileFocus="focus"
//                   required
//                 />
//               </motion.div>
              
//               <motion.div variants={itemVariants}>
//                 <motion.label className="block text-gray-900 dark:text-white font-semibold mb-3" variants={itemVariants}>
//                   Email Address
//                 </motion.label>
//                 <motion.input
//                   type="email"
//                   name="email"
//                   placeholder="your.email@example.com"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-5 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-600 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:focus:border-blue-400 transition duration-300"
//                   variants={inputVariants}
//                   whileFocus="focus"
//                   required
//                 />
//               </motion.div>
              
//               <motion.div variants={itemVariants}>
//                 <motion.label className="block text-gray-900 dark:text-white font-semibold mb-3" variants={itemVariants}>
//                   Message
//                 </motion.label>
//                 <motion.textarea
//                   name="message"
//                   placeholder="Tell me about your project or just say hello..."
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="6"
//                   className="w-full px-5 py-3 bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-600 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:focus:border-blue-400 transition duration-300 resize-none"
//                   variants={inputVariants}
//                   whileFocus="focus"
//                   required
//                 />
//               </motion.div>
              
//               <motion.button
//                 type="submit"
//                 className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition shadow-lg hover:shadow-xl"
//                 variants={buttonVariants}
//                 whileHover="hover"
//                 whileTap="tap"
//               >
//                 Send Message
//               </motion.button>
//             </div>
//           </motion.form>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

import React, { useState } from 'react'
import { Mail, Github, Linkedin, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Send to backend API endpoint
      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitStatus(null), 5000) // Clear message after 5 seconds
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus(null), 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <>
      {/* 🔝 TOP CONTACT BAR */}


      {/* 📩 CONTACT SECTION */}
      <section id="contact" className="py-20 px-6 relative overflow-hidden">
        {/* Glass background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-purple-50/50 to-indigo-100/80 dark:from-slate-950 dark:to-slate-900"></div>
        
        {/* Animated gradient overlay for light mode */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent dark:hidden opacity-60"></div>
        
        {/* Blur effect elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl dark:hidden animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl dark:hidden animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto relative z-10">

          {/* HEADER */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={item}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Have a project in mind or just want to chat? Feel free to reach out.
            </p>
          </motion.div>

          {/* GRID */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="grid lg:grid-cols-2 gap-12 items-start"
          >

            {/* LEFT */}
            <div className="space-y-6">

              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h3>

              {/* EMAIL */}
              <motion.a variants={item}
                href="mailto:parindyahewage7@gmail.com"
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}
                className="flex items-center gap-4 p-5 bg-white/40 dark:bg-slate-800 backdrop-blur-md rounded-xl border border-white/60 dark:border-slate-700 hover:border-blue-400/50 dark:hover:border-blue-400 hover:shadow-lg transition duration-300"
              >
                <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg shadow-lg">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    parindyahewage7@gmail.com
                  </p>
                </div>
              </motion.a>

              {/* PHONE */}
              <motion.a variants={item}
                href="tel:+94717474417"
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(34, 197, 94, 0.2)' }}
                className="flex items-center gap-4 p-5 bg-white/40 dark:bg-slate-800 backdrop-blur-md rounded-xl border border-white/60 dark:border-slate-700 hover:border-green-400/50 dark:hover:border-green-400 hover:shadow-lg transition duration-300"
              >
                <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg shadow-lg">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    +94 71 747 4417
                  </p>
                </div>
              </motion.a>

              {/* LOCATION */}
              <motion.div variants={item}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(147, 51, 234, 0.2)' }}
                className="flex items-center gap-4 p-5 bg-white/40 dark:bg-slate-800 backdrop-blur-md rounded-xl border border-white/60 dark:border-slate-700 hover:border-purple-400/50 dark:hover:border-purple-400 hover:shadow-lg transition duration-300"
              >
                <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg shadow-lg">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Matugama, Kalutara
                  </p>
                </div>
              </motion.div>

              {/* SOCIAL */}
              <motion.div variants={item} className="p-5 bg-white/40 dark:bg-slate-800 backdrop-blur-md rounded-xl border border-white/60 dark:border-slate-700 pt-4">
                <p className="font-semibold text-gray-900 dark:text-white mb-3">
                  Connect with Me
                </p>

                <div className="flex gap-4">
                  <motion.a href="https://github.com/Parigit7" target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-lg hover:shadow-lg transition shadow-md">
                    <Github size={20} />
                  </motion.a>

                  <motion.a href="https://linkedin.com/in/parindya-hewage" target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg transition shadow-md">
                    <Linkedin size={20} />
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* RIGHT FORM */}
            <motion.form
              onSubmit={handleSubmit}
              variants={item}
              className="bg-white/40 dark:bg-slate-800 backdrop-blur-md p-8 rounded-2xl border border-white/60 dark:border-slate-700 shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Send Message
              </h3>

              <div className="space-y-5">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-white/60 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-white/60 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Your message..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-white/60 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 resize-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  required
                />

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                  >
                    <p className="text-green-700 dark:text-green-400 font-semibold">✓ Message sent successfully!</p>
                    <p className="text-green-600 dark:text-green-500 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                  >
                    <p className="text-red-700 dark:text-red-400 font-semibold">✗ Failed to send message</p>
                    <p className="text-red-600 dark:text-red-500 text-sm">Please try again or contact me directly via email.</p>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.02, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className={`w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300 ${
                    isSubmitting
                      ? 'opacity-70 cursor-not-allowed'
                      : 'hover:from-blue-700 hover:to-blue-800 hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>

              </div>
            </motion.form>

          </motion.div>
        </div>
      </section>
    </>
  )
}