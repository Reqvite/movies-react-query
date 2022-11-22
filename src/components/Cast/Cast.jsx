import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CastList, CastListItem } from "./Cast.styled";
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
        <>
            <CastList>
                {cast.data.cast.map(actor => (
                    <CastListItem key={actor.id}>
                     <Actor actor={actor} />
             </CastListItem>
                ))}
           </CastList>
        </>
    )
}

export default Cast;