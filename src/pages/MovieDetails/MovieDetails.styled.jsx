import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const Box = styled.div`
    display: flex;
    align-items: center;
    padding: ${p => p.theme.space[2]}px;


    border: ${p => p.theme.borders.mainBorder};
    border-right: none;
    border-left: none;
    
`

export const Img = styled.img`
    width: 400px;
    height: 500px;
    object-fit: contain;
`
export const DetailsBox = styled.div`
    padding: ${p => p.theme.space[2]}px;
`

export const Title = styled.h3`
    font-size: ${p => p.theme.fontSizes[5]}px;
`

export const SecondaryTitle = styled.h3`
   margin-top: ${p => p.theme.space[2]}px;
    font-size: ${p => p.theme.fontSizes[4]}px;
`

export const Text = styled.p`
 margin-top: ${p => p.theme.space[2]}px;
    font-weight: 500;
    max-width: 700px;
`

export const AdditionalInfo = styled.div`
     padding: ${p => p.theme.space[2]}px;
`

export const AdditionalInfoList = styled.ul` 

    padding: ${p => p.theme.space[1]}px;
    margin-top: ${p => p.theme.space[2]}px;
`

export const AdditionalInfoLink = styled(NavLink)`
 margin-top: ${p => p.theme.space[2]}px;
    font-weight: 500;
    max-width: 700px;

    &:not(:first-child){
        margin-left: 20px;
    }

     &.active {
       
    color: ${p => p.theme.colors.hoverColor};

  }

  :hover:not(.active),
  :focus-visible:not(.active){
     color: ${p => p.theme.colors.hoverColor};
  }

`