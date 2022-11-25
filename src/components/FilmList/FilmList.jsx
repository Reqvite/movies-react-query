import { useLocation } from 'react-router-dom';
import { List, ListItem, ListLink } from './FilmList.styled'

const FilmList = ({data}) => {
    const location = useLocation()

    return (
           <List>{data.map(({ title, id }) =>
               <ListItem key={id}><ListLink to={`/movies/${id}`} state={{ from: location }}>{title}</ListLink></ListItem>
                )}     
            </List>
    )
}


export default FilmList;