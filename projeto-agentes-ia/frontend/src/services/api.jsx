import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';
export const generateResponse = async (text) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/generate`, { text });
    return response.data;
  } catch (error) {
    console.error('Erro ao chamar a API backend:', error);
    return null;
  }
};