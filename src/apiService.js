import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const getSpittles = async () => {
  try {
    const response = await axios.get(`https://spittr-backend-af.azurewebsites.net/api/spitters`);
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the spittles!', error);
    throw error;
  }
};

export const getSpitters = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/spitters`);
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the spitters!', error);
    throw error;
  }
};

export const deleteSpitter = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/spitters/${id}`);
  } catch (error) {
    console.error('There was an error deleting the spitter!', error);
    throw error;
  }
};

export const addSpitter = async (spitter) => {
  try {
    await axios.post(`${BASE_URL}/spitters`, spitter, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('There was an error adding the spitter!', error);
    throw error;
  }
};
