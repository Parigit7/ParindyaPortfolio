const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
require('dotenv').config();
const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

const app = express();
const PORT = 8080;

// Configure Nodemailer for Gmail
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//   user: process.env.EMAIL_USER,
//   pass: process.env.EMAIL_PASS
// }
// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });


// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3008', 'http://localhost:5173', 'https://parindya-portfolio.netlify.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    console.log('Contact Request Received:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('---');

    // Email content
    await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'parindyahewage7@gmail.com',
  subject: `New Contact Form Submission from ${name}`,
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
  `
});
    // Send email
    // await transporter.sendMail(mailOptions);
   console.log('✅ Email sent successfully');

    res.status(200).json({ success: true, message: 'Message received and email sent successfully' });
  } catch (error) {
    console.error('❌ Error processing contact request:', error.message);
    res.status(500).json({ error: 'Failed to process your message: ' + error.message });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'Backend is running!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n✅ Portfolio Backend running on http://localhost:${PORT}`);
  console.log(`📧 Contact endpoint: POST http://localhost:${PORT}/api/contact\n`);
});
