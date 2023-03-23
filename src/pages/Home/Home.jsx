import * as API from '../../service/api';

import FilmList from 'components/FilmList/FilmList';
import { Typography, Box, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  const {
    data: { data } = {},
    isError,
    isLoading,
    isFetching,
    error,
  } = API.useGetTrendingMovies();

  useEffect(() => {
    if (data) {
      setTrendingFilms([...data.results]);
    }
  }, [data]);

  return (
    <Box as="main" sx={{ padding: 2 }}>
      <Typography variant="h5" component="h1">
        Trending Today
      </Typography>
      {isLoading ? <CircularProgress /> : <FilmList data={trendingFilms} />}
      {!isLoading && isFetching && <p>Обновление</p>}
      {isError && <p>{error.message}</p>}
    </Box>
  );
};

export default Home;
