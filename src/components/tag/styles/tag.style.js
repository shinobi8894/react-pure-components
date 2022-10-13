import styled from "styled-components";

export const StyledTag = styled.div`
    background-color:${(props) => props.bg};
    font-size:1rem;
    border-radius:0.65rem;
    display:inline-block;
    font-size:0.75rem;
    text-transform:uppercase;
    padding:0.25rem 0.375rem;
    color:${(props) => props.color};
`