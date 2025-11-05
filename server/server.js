// server/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Simple in-memory tutors data
let tutors = [
  { id: 1, name: "Hanna M.", subjects: ["Mathematics","Physics"], exp: "6+ yrs", degree: "BSc Engineering" },
  { id: 2, name: "Abel T.", subjects: ["English","Public Speaking"], exp: "5+ yrs", degree: "BA English" },
  { id: 3, name: "Selam A.", subjects: ["Biology","Chemistry"], exp: "7+ yrs", degree: "MSc Biology" }
];

app.get('/api/tutors', (req, res) => {
  res.json(tutors);
});

app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log('Contact form submitted:', { name, email, phone, message });
  // In production: save to DB or send email
  res.json({ success: true, message: 'Thanks! We received your message.' });
});

app.post('/api/bookings', (req, res) => {
  const booking = req.body;
  console.log('New booking:', booking);
  res.json({ success: true, booking });
});

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
