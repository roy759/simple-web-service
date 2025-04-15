export async function callExternalService() {
    try {
      const response = await fetch(process.env.EXTERNAL_SERVICE_URL);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return data;
    } catch (err) {
      return { error: 'External service call failed', message: err.message };
    }
  }