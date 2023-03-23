import { Link, List, ListItem } from '@mui/material';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const FilmList = memo(({ data }) => {
  const location = useLocation();
  return (
    <List>
      {data?.map(({ title, id }) => (
        <ListItem key={id}>
          <Link
            as={NavLink}
            to={`/movies/${id}`}
            state={{ from: location }}
            underline="none"
          >
            {title}
          </Link>
        </ListItem>
      ))}
    </List>
  );
});

export default FilmList;

FilmList.propTypes = {
  data: PropTypes.array.isRequired,
};
