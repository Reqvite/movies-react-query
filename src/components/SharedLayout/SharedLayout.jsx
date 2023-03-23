import { Suspense } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { AppBar, Link, List, ListItem } from '@mui/material';

const SharedLayout = () => {
  const location = useLocation();

  return (
    <>
      <AppBar position="static" sx={{ background: 'gray' }}>
        <nav>
          <List sx={{ display: 'flex' }}>
            <ListItem sx={{ maxWidth: 100 }}>
              <Link
                as={NavLink}
                to="/"
                sx={{ color: location.pathname === '/' ? 'yellow' : 'black' }}
              >
                Home
              </Link>
            </ListItem>
            <ListItem sx={{ maxWidth: 100 }}>
              <Link
                as={NavLink}
                to="/movies"
                sx={{
                  color: location.pathname === '/movies' ? 'yellow' : 'black',
                }}
              >
                Movies
              </Link>
            </ListItem>
          </List>
        </nav>
      </AppBar>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
