import axios from "axios";

export const appAxios = axios.create({
  baseURL: "https://alpha-vantage.p.rapidapi.com/query",
  headers: {
    "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
    "x-rapidapi-key": "0dadb5d323msh5d928624bc59d6fp1e8200jsn4b329fafc6c8",
  },
});
