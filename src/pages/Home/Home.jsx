import { useEffect } from 'react';

import * as API from '../../service/api'


const Home = ({ }) => {
     

     useEffect(() => {

    const fetchFilms = async () => {
      const resp = await API.fetchTrendingMovies()
        

     }


  })

    return (
        <>
        <main>
            <h1>Trending Today</h1>
            <ul></ul>
            </main>
        </>
    )
 }

export default Home;