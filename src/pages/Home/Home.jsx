import { useState, useEffect } from 'react';

import * as API from '../../service/api'

import { Container } from 'components/Container/Container';
import FilmList from 'components/FilmList/FilmList';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);
    const location = useLocation()
    
   
    useEffect(() => {
        if (loader) {
      return
    };

    const fetchFilms = async () => {
      const resp = await API.fetchTrendingMovies()
        setData([...resp.data.results])
        console.log(resp);
     }
    
        fetchFilms();
        setLoader(true)
  },[data, loader, location])

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