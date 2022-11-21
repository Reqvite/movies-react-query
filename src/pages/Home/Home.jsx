import { useState, useEffect } from 'react';


import * as API from '../../service/api'


const Home = ({ }) => {
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
  })

    return (
        <>
        <main>
            <h1>Trending Today</h1>
                <ul>{data.map(({ title, id }) =>
                    <li key={id}>{title}</li>
                )}     
            </ul>
            </main>
        </>
    )
 }

export default Home;