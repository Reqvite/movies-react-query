import { Routes,Route } from 'react-router-dom';
import { theme } from 'theme/theme';
import { ThemeProvider } from 'styled-components';

import SharedLayout from './SharedLayout/SharedLayout';
import Home from '../pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {


 
  
  return (
    <ThemeProvider theme={theme}>
      <Routes>
       <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home/>} />
          <Route path='movies' element={<Movies />} />
          <Route path='movies/:id' element={<MovieDetails />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews/>} />
            </Route>
       </Route>
      </Routes>
  </ThemeProvider>
  );
};
