import fetch from 'node-fetch';

async function get(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during GET request:', error);
    throw error;
  }
}

async function post(url, data) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error during POST request:', error);
    throw error;
  }
}

export { get, post };
