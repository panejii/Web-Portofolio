import axios from "axios";

const API_URL = "http://localhost:5000/api/messages";

export const sendMessage = async (messageData) => {
  const response = await axios.post(API_URL, messageData);
  return response.data;
};