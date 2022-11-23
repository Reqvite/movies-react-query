import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const List = styled.ul`
display: flex;
flex-direction: column;
    padding: ${p => p.theme.space[2]}px;
`

export const ListItem = styled.li`
&:not(:first-child){
        margin-top: ${p => p.theme.space[2]}px;
    }
`

export const ListLink = styled(NavLink)`

    &:not(:first-child){
        margin-top: ${p => p.theme.space[2]}px;
    }
`