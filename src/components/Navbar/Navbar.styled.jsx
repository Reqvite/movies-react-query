import styled from "styled-components";

export const Header = styled.header`
background-color: ${p => p.theme.colors.headerBgColor};
padding: ${p => p.theme.space[2]}px;
box-shadow: ${p => p.theme.shadows.mainShadow};
`

export const NavList = styled.ul`
    display: flex;

    
`

export const NavListItem = styled.li`
    &:not(:first-child){
        margin-left: ${p => p.theme.space[2]}px;
    }
`

export const NavListItemText = styled.p`
    font-size: ${p => p.theme.fontSizes[4]}px;
`