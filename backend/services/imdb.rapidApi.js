import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

export const fetchImdbRapidMovies = async (url) => {
  const options = {
    method: "GET",
    url: "https://imdb-top-100-movies.p.rapidapi.com/",
    headers: {
      "x-rapidapi-key": ENV_VARS.IMDB_RAPID_API_KEY,
      "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  const response = await axios.get(url, options);
  return response.data;
};
