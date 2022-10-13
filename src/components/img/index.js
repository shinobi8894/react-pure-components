import { StyledImage } from "./styles/img.style";

const Img = ({children,...rest}) => {
    return(
        <StyledImage {...rest}/>
    )
}

export default Img;