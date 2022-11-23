import { List, ListItem, ListLink } from './FilmList.styled'

const FilmList = ({data}) => {


    return (
           <List>{data.map(({ title, id }) =>
                    <ListItem key={id}><ListLink to={`/movies/${id}`}>{title}</ListLink></ListItem>
                )}     
            </List>
    )
}


export default FilmList;