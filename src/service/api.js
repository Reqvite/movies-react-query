import axios from "axios";


const API_KEY = 'e145377b3a98d62607e7dc90339d279b';


export const fetchTrendingMovies = async () => {
    return await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`);
}

