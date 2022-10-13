import { ckBgMiddleware, ckColorMiddleware } from "./middlewares/ck.middleware";
import { StyledTag } from "./styles/tag.style";

const Tag = ({ children, ...rest }) => {
    const { className } = rest;

    return(
        <StyledTag {...rest} color={ckColorMiddleware(className)} bg={ckBgMiddleware(className)}>
            {
                children
            }
        </StyledTag>
    )
}

export default Tag;