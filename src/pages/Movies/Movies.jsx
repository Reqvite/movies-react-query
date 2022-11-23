import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import * as API from '../../service/api'

const Movies = () => {

    const [searchParams, setSearchParams] = useSearchParams('')
    const [queryFilms, setQueryFilms] = useState(null)

       const query = searchParams.get('query')
  
    useEffect(() => {

        const getQueryFilms = async () => {

           const resp = await API.fetchQueryFilms(query)

            setQueryFilms([...resp.data.results])
        }

        getQueryFilms()

    },[query, searchParams])

 

    const handleSubmit = e => {
        e.preventDefault()
        setSearchParams({query: e.target.elements[0].value })
    }


    if (!queryFilms) return
    
    console.log(queryFilms);
    return (
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
    )
}

export default Movies;