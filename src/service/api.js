import axios from "axios";


const API_KEY = 'e145377b3a98d62607e7dc90339d279b';


export const fetchTrendingMovies = async () => {
    return await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`);
}

export const fetchFilmDetails = async id => {
 return  await  axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
}

export const fetchCredits = async id => {
    return await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
}

export const fetchReviews = async id => {
    return await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
}