import axios from "axios";

const API_URL = "http://localhost:5000/api/messages";

export const sendMessage = async (messageData) => {
  const response = await axios.post(API_URL, messageData);
  return response.data;
};

export const getMessages = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const markMessageAsRead = async (id) => {
  const response = await axios.patch(`${API_URL}/${id}/read`);
  return response.data;
};

export const deleteMessage = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};