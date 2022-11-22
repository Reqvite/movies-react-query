import { Img, Box, Text  } from "./Actor.styled";


const Actor = ({actor}) => {
    console.log(actor);
    const { profile_path, name, character } = actor;
   
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