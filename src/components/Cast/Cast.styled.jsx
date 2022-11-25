import styled from "styled-components";

export const CastList = styled.ul`
    display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
         margin-top: ${p => p.theme.space[2]}px;
`

export const CastListItem = styled.li`
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    
`

export const ErrorMessage = styled.ul`
     margin-top: ${p => p.theme.space[2]}px;
`