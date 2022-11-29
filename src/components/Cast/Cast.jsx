import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CastList, CastListItem, ErrorMessage } from "./Cast.styled";
import * as API from '../../service/api'

import Actor from "../Actor/Actor";

const Cast = () => {

 const {id} = useParams()
const [cast, setCast] = useState(null)
    useEffect(() => {
        
        const getCast = async () => {      
            setCast(await API.fetchCredits(id))
        }

        getCast()
    }, [id])
    
    if (!cast) return;

  
      
    return (
          cast.data.cast.length !== 0
           ?(<CastList>
                {cast.data.cast.map(({id, ...otherProps}) => (
                    <CastListItem key={id}>
                     <Actor {...otherProps} />
             </CastListItem>
                ))}
            </CastList>) 
            : <ErrorMessage>Sorry, we can't find a cast for this movie..</ErrorMessage>   
    )
}

export default Cast;