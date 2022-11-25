import styled from "styled-components";

import { Link } from "react-router-dom";

export const BackBtnLink = styled(Link)`   
   font-size: ${p => p.theme.fontSizes[3]}px;

   &:hover,
   &:focus{
    color: ${p => p.theme.colors.hoverColor};
   }
`