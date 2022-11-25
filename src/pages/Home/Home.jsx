import { useState, useEffect } from 'react';

import * as API from '../../service/api'

import { Container } from 'components/Container/Container';
import FilmList from 'components/FilmList/FilmList';

const Home = () => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);
    
   
    useEffect(() => {
        if (loader) {
      return
    };

    const fetchFilms = async () => {
      const resp = await API.fetchTrendingMovies()
        setData([...resp.data.results])
     }
    
        fetchFilms();
        setLoader(true)
  },[data, loader])

    return (
        <>
            <main>
             <Container display="flex" flexDirection="column"  padding="3">
            <h1>Trending Today</h1>
                    <FilmList data={data}/>
                </Container>
            </main>
        </>
    )
 }

export default Home;