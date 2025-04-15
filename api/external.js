import { callExternalService } from '../services/external';

export default async function handler(req, res) {
  try {
    const result = await callExternalService();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'External service call failed', message: error.message });
  }
}