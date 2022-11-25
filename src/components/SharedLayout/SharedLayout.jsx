import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Loader } from "components/Loader/Loader";

import { Header, NavList, NavListItem, NavListItemLink } from "./SharedLayout.styled";



const SharedLayout = () => {
    
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
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
        </>
    )
}

export default SharedLayout;