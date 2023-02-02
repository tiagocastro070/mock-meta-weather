import axios from "axios";

const api = axios.create({
  baseURL: "https://foreca-weather.p.rapidapi.com/forecast",
  headers: {
    "Content-Type": "application/json",
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": "foreca-weather.p.rapidapi.com",
  },
});

export default api;
