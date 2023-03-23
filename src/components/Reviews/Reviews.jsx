import { useParams } from 'react-router-dom';
import { ReviewList, ErrorMessage } from './Reviews.srtyed';

import Review from './Review/Review';

import { useGetFetchQuery } from 'hooks/useGetFetchQuery';
const Reviews = () => {
  const { id } = useParams();

  const reviews = useGetFetchQuery(['movieReviews', id]);

  return reviews?.data.results.length !== 0 ? (
    <ReviewList>
      {reviews?.data.results.map(({ id, ...otherProps }) => (
        <li key={id}>
          <Review {...otherProps} />
        </li>
      ))}
    </ReviewList>
  ) : (
    <ErrorMessage>Sorry, there are no reviews for this movie.</ErrorMessage>
  );
};

export default Reviews;
