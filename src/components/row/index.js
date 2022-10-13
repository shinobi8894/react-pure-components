import { horizontalMiddleware, verticalMiddleware } from "./middlewares/align.middleware";
import { StyledRow } from "./styles/row.style";

const Row = ({children, ...rest}) => {

    const { justifyContent, gap, alignItems } = rest;

    return(
        <StyledRow {...rest} alignItems={verticalMiddleware(alignItems)} justifyContent={horizontalMiddleware(justifyContent)} gap={gap}>
            {
                children
            }
        </StyledRow>
    )
}

export default Row;