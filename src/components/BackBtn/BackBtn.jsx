import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const BackBtn = ({ location }) => {
  const backLinkHref = location.state?.from ?? '/';
  return (
    <Button
      variant="outlined"
      component={Link}
      to={backLinkHref}
      sx={{ mb: 2 }}
    >
      Back
    </Button>
  );
};

BackBtn.propTypes = {
  location: PropTypes.object.isRequired,
};
