const express = require('express');
const router = express.Router();
const { callExternalService } = require('../services/external');
const supabase = require('../services/supabase');

// Health check
router.get('/status', (req, res) => {
  res.json({ message: 'Service running ✅' });
});

// Call external service (n8n/webhook)
router.get('/external', async (req, res) => {
  const result = await callExternalService();
  res.json(result);
});

// Insert a message into Supabase
router.post('/message', async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  const { data, error } = await supabase
    .from('messages')
    .insert([{ text }])
    .select(); // Now returns the inserted row

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// Fetch all messages from Supabase
router.get('/messages', async (req, res) => {
  const { data, error } = await supabase
    .from('messages')
    .select('*') // Fetch all columns
    .order('created_at', { ascending: false }); // Order by the newest first

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

module.exports = router;
