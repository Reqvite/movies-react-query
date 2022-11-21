import { Routes,Route } from 'react-router-dom';
import { theme } from 'theme/theme';
import { ThemeProvider } from 'styled-components';

import { Container } from './Container/Container';
import SharedLayout from './SharedLayout/SharedLayout';
import Home from '../pages/Home/Home';
import Movies from 'pages/Movies/Movies';



export const App = () => {


 
  
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home/>}></Route>
          <Route path='movies' element={<Movies />}></Route>
          </Route>
        </Routes>
      <Container display="flex" flexDirection="column"  padding="3">
      </Container>  
  </ThemeProvider>
  );
};
