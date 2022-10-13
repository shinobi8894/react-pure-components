import { StyledInput } from "./styles/input.style";


const Input = ({ children, ...rest }) => {
    return(
        <StyledInput {...rest}>
            {
                children
            }
        </StyledInput>
    )
}

export default Input;