const axios = require('axios');

async function callExternalService() {
  try {
    const response = await axios.get(process.env.N8N_WEBHOOK_URL);
    return response.data;
  } catch (error) {
    return {
      error: 'External service call failed',
      message: error.message,
    };
  }
}

module.exports = { callExternalService };