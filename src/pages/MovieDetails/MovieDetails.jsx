import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import * as API from '../../service/api';

import {
  CircularProgress,
  Box,
  Typography,
  List,
  ListItem,
  Button,
} from '@mui/material';
import { BackBtn } from 'components/BackBtn/BackBtn';

const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();

  const { data: { data } = {}, isError, error } = API.useGetFilmDetailsById(id);

  API.useGetCreditsAndReviews(id);

  if (!data) {
    return <CircularProgress />;
  }

  const {
    poster_path,
    original_title,
    overview,
    release_date,
    vote_average,
    genres,
  } = data;

  return (
    <Box as="main" sx={{ padding: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box>
          <BackBtn location={location} />
          <Box
            as="img"
            src={`https://www.themoviedb.org/t/p/w500/${poster_path}`}
            alt={original_title}
          />
        </Box>
        <Box sx={{ padding: 3 }}>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
            {original_title}
            <span>({release_date})</span>
          </Typography>
          <Typography component="p" sx={{ fontWeight: 700 }}>
            User Score: <span>{vote_average.toFixed(1)}</span>
          </Typography>
          <Typography sx={{ fontWeight: 700 }}>Overviev</Typography>
          <span>{overview}</span>
          <Typography sx={{ fontWeight: 700 }}>Genres</Typography>
          <span>{genres.map(el => `${el.name}, `)}</span>
        </Box>
      </Box>
      <div>
        <Box sx={{ padding: 1 }}>
          <Typography>Additional information</Typography>
          <List sx={{ display: 'flex', width: 250 }}>
            <ListItem>
              <Button component={Link} to={'cast'} variant="outlined">
                Cast
              </Button>
            </ListItem>
            <ListItem>
              <Button component={Link} to="reviews" variant="outlined">
                Reviews
              </Button>
            </ListItem>
          </List>
        </Box>
        <Outlet />
      </div>
      {isError && <p>{error.message}</p>}
    </Box>
  );
};

export default MovieDetails;
