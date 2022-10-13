import { ckBgMiddleware } from "./middlewares/ck.middleware";
import { StyledButton } from "./styles/buttons.style";

const Button = ({ children, ...rest }) => {

    const { bg } = rest;

    return(
        <StyledButton {...rest} bg={ckBgMiddleware(bg)}>
            {
                children
            }
        </StyledButton>
    )
}

export default Button;