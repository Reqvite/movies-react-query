import { useState, useEffect } from 'react';
import { TrendingList, TrendingListLink  } from './Home.styled';

import * as API from '../../service/api'

import { Container } from 'components/Container/Container';

const Home = () => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);
    

    useEffect(() => {
        if (loader) {
      return
    };

    const fetchFilms = async () => {
      const resp = await API.fetchTrendingMovies()
        setData([...data, ...resp.data.results])
        console.log(resp);
     }

        fetchFilms();
        setLoader(true)
  },[data, loader])

    return (
        <>
            <main>
             <Container display="flex" flexDirection="column"  padding="3">
            <h1>Trending Today</h1>
                <TrendingList>{data.map(({ title, id }) =>
                    <TrendingListLink to={`movies/${id}`} key={id}>{title}</TrendingListLink>
                )}     
                    </TrendingList>
                </Container>
            </main>
        </>
    )
 }

export default Home;