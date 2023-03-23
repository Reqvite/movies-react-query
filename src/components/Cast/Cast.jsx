import { useParams } from 'react-router-dom';
import { CastList, CastListItem, ErrorMessage } from './Cast.styled';
import Actor from '../Actor/Actor';
import { useGetFetchQuery } from 'hooks/useGetFetchQuery';

const Cast = () => {
  const { id } = useParams();
  const cast = useGetFetchQuery(['movieCredits', id]);

  return cast?.data?.cast.length !== 0 ? (
    <CastList>
      {cast?.data?.cast?.map(({ id, ...otherProps }) => (
        <CastListItem key={id}>
          <Actor {...otherProps} />
        </CastListItem>
      ))}
    </CastList>
  ) : (
    <ErrorMessage>Sorry, we can't find a cast for this movie..</ErrorMessage>
  );
};

export default Cast;
