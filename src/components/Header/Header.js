import HeaderStyled from "./HeaderStyled" 

export const Header = ({ children }) =>{
    return(
        <HeaderStyled>
            {children}
        </HeaderStyled>
    )
}