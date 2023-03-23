import PropTypes from 'prop-types';

import { Name, Text } from './Review.styled';

const Review = ({ author, content }) => {
  return (
    <>
      <Name>Author: {author}</Name>
      <Text>{content}</Text>
    </>
  );
};

export default Review;

Review.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
