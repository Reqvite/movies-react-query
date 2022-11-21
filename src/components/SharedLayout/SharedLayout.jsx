import { Outlet } from "react-router-dom";
import { Header, NavList, NavListItem, NavListItemLink } from "./SharedLayout.styled";



const SharedLayout = ({ }) => {
    
    return (
        <>
        <Header>
            <nav>
          <NavList >
            <NavListItem>
                <NavListItemLink to="/">Home</NavListItemLink>
            </NavListItem>
            <NavListItem>
                <NavListItemLink to="movies">Movie</NavListItemLink>
            </NavListItem>
            </NavList>  
            </nav>
        </Header>
            <Outlet/>
        </>
    )
}

export default SharedLayout;