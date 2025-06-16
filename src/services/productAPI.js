import axios from "axios";

const API_URL = "https://ognekvegcoeohqdzchod.supabase.co/rest/v1/products";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nbmVrdmVnY29lb2hxZHpjaG9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MDcyNDcsImV4cCI6MjA2NDQ4MzI0N30.ik54CgexNjqbpeDxDP81oxMp5sUbpvgTU7N_DeHocyc";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const productAPI = {
  async getAll() {
    const response = await axios.get(API_URL, { headers });
    return response.data;
  },

  async create(data) {
    const response = await axios.post(API_URL, data, { headers });
    return response.data;
  },

  async update(id, data) {
    const response = await axios.patch(`${API_URL}?id=eq.${id}`, data, { headers });
    return response.data;
  },

  async remove(id) {
    await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
  },
};
