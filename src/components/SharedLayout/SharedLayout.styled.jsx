import styled from "styled-components";

import { NavLink } from "react-router-dom";

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

export const NavListItemLink = styled(NavLink)`
    font-size: ${p => p.theme.fontSizes[4]}px;

     &.active {
       
    color: ${p => p.theme.colors.hoverColor};

    ::after{
        content: '';
        display: block;
        color: black;
        border: 1px solid black;
         border-radius: 3px;
    }
  }

  :hover:not(.active),
  :focus-visible:not(.active){
     color: ${p => p.theme.colors.hoverColor};
  }
  
`