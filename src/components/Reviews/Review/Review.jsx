import { Name, Text } from "./Review.styled";


const  Review = ({ review }) => {
    const { author, content } = review;

    return (
        <>
            <Name>Author: {author}</Name>
            <Text>{content}</Text>
        </>
    )
}


export default Review;