import { supabase } from '../services/supabase';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    const { data, error } = await supabase
      .from('messages')
      .insert([{ text }])
      .select(); 

    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}