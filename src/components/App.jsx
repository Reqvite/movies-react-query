import { useEffect } from 'react';
import { Routes,Route } from 'react-router-dom';
import { theme } from 'theme/theme';
import { ThemeProvider } from 'styled-components';

import { Container } from './Container/Container';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';

import * as API from '../service/api'


export const App = () => {


  useEffect(() => {
     
  })
  
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Navbar/>}></Route>
        </Routes>

      <Container display="flex" flexDirection="column"  padding="3">
        <Main/>
      </Container>  
  </ThemeProvider>
  );
};
