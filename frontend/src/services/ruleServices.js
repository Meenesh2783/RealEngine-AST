import axios from 'axios';

const API_URL = 'http://localhost:5000/api/rules';

export const createRule = async (ruleString) => {
  const response = await axios.post(`${API_URL}/create`, { ruleString });
  return response.data;
};

export const evaluateRule = async (data) => {
  const response = await axios.post(`${API_URL}/evaluate`, data);
  return response.data;
};
