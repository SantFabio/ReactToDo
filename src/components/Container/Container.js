import ContainerWrapper from "./ContainerWrapper";

export const Container = ({ children }) =>{
    return(
        <ContainerWrapper className="container">
            {children}
        </ContainerWrapper>
    )
}