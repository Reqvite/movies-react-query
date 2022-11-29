import PropTypes from 'prop-types';

import { Img, Box, Text } from "./Actor.styled";


const Actor = ({ profile_path, name, character }) => {
    
    let img;
    profile_path 
        ? img = `https://www.themoviedb.org/t/p/w500/${profile_path}`
        : img = `https://storage.googleapis.com/macrovector-acl-eu/previews/40042/preview_40042.jpg`
    return (
        <>
            <Img src={img} alt={name} />
            <Box >
            <Text >{name}</Text>
                <Text>Character: {character}</Text>
            </Box>
        </>
    )
}


export default Actor;

Actor.propTypes = {
    profile_path: PropTypes.string,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
}