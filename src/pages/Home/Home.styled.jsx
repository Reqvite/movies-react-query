import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const TrendingList = styled.ul`
    padding: ${p => p.theme.space[2]}px;
`

export const TrendingListLink = styled(NavLink)`
display: flex;
    &:not(:first-child){
        margin-top: ${p => p.theme.space[2]}px;
    }
`