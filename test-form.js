const https = require('https');

const data = JSON.stringify({
  name: 'Test User',
  email: 'test@example.com',
  message: 'Testing deployed contact form'
});

const options = {
  hostname: 'parindyaportfolio.onrender.com',
  path: '/api/contact',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = https.request(options, (res) => {
  console.log('✅ Status:', res.statusCode);
  let body = '';
  res.on('data', (d) => body += d);
  res.on('end', () => {
    try {
      console.log('Response:', JSON.parse(body));
    } catch (e) {
      console.log('Response:', body);
    }
  });
});

req.on('error', (e) => {
  console.error('❌ Error:', e.message);
});

req.write(data);
req.end();
