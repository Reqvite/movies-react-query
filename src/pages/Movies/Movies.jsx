import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import * as API from '../../service/api'

import { Container } from "components/Container/Container";
import FilmList from "components/FilmList/FilmList";

const Movies = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const [queryFilms, setQueryFilms] = useState(null)
     const [loader, setLoader] = useState(true);

    const query = searchParams.get('query');
    
 
    useEffect(() => {
        if (loader) {
      return
        };
        const getQueryFilms = async () => {
         
           const resp = await API.fetchQueryFilms(query)
           
           
            setQueryFilms([...resp.data.results])
        }

        getQueryFilms()
        setLoader(true)

    },[loader, query])

 

    const handleSubmit = e => {
        e.preventDefault()
        setSearchParams({ query: e.target.elements[0].value })
        setLoader(false)
    }

    return (
        <Container display="flex" flexDirection="column"  padding="3">
            <form onSubmit={handleSubmit}>
         <label
        htmlFor="query"
      >
        <input
          type="text"
          name="query"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
            </label>
            <button type="submit" >Search</button>
        </form>   
            {!queryFilms ? null : <FilmList data={queryFilms}/> }
         </Container>
    )
}

export default Movies;