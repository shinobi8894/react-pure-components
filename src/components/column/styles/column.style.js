import styled from "styled-components";

export const StyledColumn = styled.div`
    display:flex;
    flex-direction:column;
    gap:${(props) => props.gap};
    align-items:${(props) => props.alignItems};
`