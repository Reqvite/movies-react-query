import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { theme } from 'theme/theme';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import SharedLayout from './SharedLayout/SharedLayout';
import Home from '../pages/Home/Home';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const App = () => {
  const Movies = lazy(() => import('../pages/Movies/Movies'));
  const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:id" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
        <GlobalStyle />
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
