import { Wrapper } from "./styles/layout.style";

const AppLayout = ({ children, ...rest}) => {
    return(
        <Wrapper {...rest}>
            {
                children
            }
        </Wrapper>
    )
}

export default AppLayout;