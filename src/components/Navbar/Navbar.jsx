import { Header, NavList, NavListItem, NavListItemText } from "./Navbar.styled";

const Navbar = ({ }) => {
    



    return (
        <Header>
            <nav>
          <NavList >
            <NavListItem>
                <NavListItemText>Home</NavListItemText>
            </NavListItem>
            <NavListItem>
                <NavListItemText>Movie</NavListItemText>
            </NavListItem>
            </NavList>  
            </nav>
        </Header>
    )
}

export default Navbar;