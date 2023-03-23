import { useQueries, useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_KEY = 'e145377b3a98d62607e7dc90339d279b';

export const useGetTrendingMovies = () => {
  const queryResp = useQuery(
    ['trendingFilms'],
    async () =>
      await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
      ),
    {
      staleTime: 30000,
    }
  );
  return queryResp;
};

export const useGetFilmDetailsById = id => {
  const queryResp = useQuery(
    ['movieDetail', id],
    async () =>
      await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
      ),
    { refetchOnWindowFocus: false }
  );
  return queryResp;
};

export const useGetCreditsAndReviews = async id => {
  const resp = useQueries({
    queries: [
      {
        queryKey: ['movieCredits', id],
        queryFn: async () =>
          await axios.get(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
          ),
      },
      {
        queryKey: ['movieReviews', id],
        queryFn: async () =>
          await axios.get(
            `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
          ),
      },
    ],
  });
  return resp;
};

export const useGetCredits = id => {
  const queryResp = useQuery(
    ['movieCredits', id],
    async () =>
      await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
      )
  );
  return queryResp;
};

export const fetchReviews = async id => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
};

export const useGetQueryFilms = query => {
  const queryResp = useQuery(
    ['movieSearch', query],
    async () =>
      await axios.get(
        ` https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      ),
    { enabled: !!query }
  );
  return queryResp;
};
