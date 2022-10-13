import styled from "styled-components";

export const StyledButton = styled.button`
    background-color:${(props) => props.bg};
    color:inherit;
    font-family:inherit;
    width:auto;
    height:2.5rem;
    border-radius:0.8rem;
    font-size:clamp(0.3rem, -0.375rem + 8.333333vw, 0.9rem);
    font-weight:600;
    cursor:pointer;
    z-index:2;
    position:relative;
    padding-left:1.25rem;
    padding-right:1.25rem;
`