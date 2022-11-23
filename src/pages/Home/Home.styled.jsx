import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const TrendingList = styled.ul`
display: flex;
flex-direction: column;
    padding: ${p => p.theme.space[2]}px;
`

export const TrendingListItem = styled.li`
&:not(:first-child){
        margin-top: ${p => p.theme.space[2]}px;
    }
`

export const TrendingListLink = styled(NavLink)`

    &:not(:first-child){
        margin-top: ${p => p.theme.space[2]}px;
    }
`