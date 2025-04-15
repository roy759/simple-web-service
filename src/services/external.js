const axios = require('axios');

async function callExternalService() {
  try {
    const response = await axios.get('https://webhook.site/e3d1ab14-c68c-4282-856e-13fe2c86e444');
    return response.data;
  } catch (error) {
    return { error: 'External service call failed', message: error.message };
  }
}

module.exports = { callExternalService };
