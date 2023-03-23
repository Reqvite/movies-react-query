import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import * as API from '../../service/api';

import FilmList from 'components/FilmList/FilmList';
import { Box, OutlinedInput, Typography } from '@mui/material';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [queryFilms, setQueryFilms] = useState('');
  const [films, setFilms] = useState([]);
  const query = searchParams.get('query');
  const { data: { data } = {} } = API.useGetQueryFilms(queryFilms);

  useEffect(() => {
    if (query) {
      setQueryFilms(query);
    }
    if (data) {
      setFilms([...data.results]);
    }
  }, [query, data]);

  const handleInput = e => {
    setQueryFilms(e.target.value);
    setSearchParams({ query: e.target.value });
  };

  return (
    <Box as="main" sx={{ padding: 2 }}>
      <form>
        <label htmlFor="query">
          <OutlinedInput
            onChange={handleInput}
            value={queryFilms}
            type="text"
            name="query"
            error={films.length === 0 && queryFilms !== ''}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
        </label>
      </form>
      <FilmList data={films} />
      {films.length === 0 && queryFilms !== '' && (
        <Typography component="p">No films for this search query</Typography>
      )}
    </Box>
  );
};

export default Movies;
