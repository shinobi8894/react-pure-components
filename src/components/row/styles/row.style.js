import styled from "styled-components";

export const StyledRow = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:${(props) => props.justifyContent};
    align-items:${(props) => props.alignItems};
    width:100%;
    gap:${(props)=>props.gap};
`