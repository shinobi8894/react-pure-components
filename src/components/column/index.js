import { horizontalMiddleware } from "./middlewares/align.middleware";
import { StyledColumn } from "./styles/column.style";

const Column = ({ children, ...rest }) => {

    const { gap, alignItems } = rest;

    return (
        <StyledColumn {...rest} gap={gap} alignItems={horizontalMiddleware(alignItems)}>
            {
                children
            }
        </StyledColumn>
    )

}

export default Column;