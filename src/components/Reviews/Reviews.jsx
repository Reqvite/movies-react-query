import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReviewList, ErrorMessage } from "./Reviews.srtyed";

import Review from "./Review/Review";

import * as API from '../../service/api'

const Reviews = () => {
    const {id} = useParams()
    const [reviews, setReviews] = useState(null)

    useEffect(() => {

        const getReviews = async () => {

            setReviews(await API.fetchReviews(id))

        }
        getReviews()
    }, [id])
    
    if (!reviews) return 

    return (
        reviews.data.results.length !== 0
        ? (<ReviewList>
                {reviews.data.results.map(review => (
                    <li key={review.id}><Review  review={review} /></li>  
                ))}
            </ReviewList >)
        :<ErrorMessage>Sorry, there are no reviews for this movie.</ErrorMessage>    
    )
}

export default Reviews;