import { Box, Img, DetailsBox, Title, SecondaryTitle, Text, AdditionalInfo, AdditionalInfoList, AdditionalInfoLink } from "./MovieDetails.styled";

import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";

import * as API from '../../service/api'

const MovieDetails = () => {

    const [details, setDetails] = useState(null)
  const {id} = useParams()


    useEffect(() => {

        const getFilmDetails = async () => {

           
            setDetails(await API.fetchFilmDetails(id))
        }

 
        getFilmDetails()
        
     
    }, [id])

    if (!details) return
    

    const { poster_path, original_title, overview, release_date, vote_average, genres } = details.data;

    return (
        
        <>
            <Box>
                <Img src={`https://www.themoviedb.org/t/p/w500/${poster_path}`} alt={original_title} />
                <DetailsBox><Title>{original_title}<span>({release_date})</span></Title>
                    <Text>User Score: <span>{vote_average.toFixed(1)}</span></Text>
                    <SecondaryTitle>Overviev</SecondaryTitle>
                    <Text>{overview}</Text>
                    <SecondaryTitle>Genres</SecondaryTitle>
                    <Text>{genres.map(el => `${el.name}`)}</Text>
                </DetailsBox>
            </Box>
            <AdditionalInfo>
                <SecondaryTitle>Additional information</SecondaryTitle>
               <AdditionalInfoList>
                <AdditionalInfoLink to="cast">Cast</AdditionalInfoLink>
                <AdditionalInfoLink to="reviews">Reviews</AdditionalInfoLink>
               </AdditionalInfoList> 
            </AdditionalInfo>
            <Outlet/>
        </>
    )
}


export default MovieDetails;