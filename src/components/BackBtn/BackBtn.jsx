import { BackBtnLink } from "./BackBtn.styled"


export const BackBtn = ({ location }) => {
       const backLinkHref = location.state?.from ?? '/'
    return (
        <>
            <BackBtnLink to={backLinkHref}>Back</BackBtnLink>
       </>
    )
}