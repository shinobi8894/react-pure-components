import styled from "styled-components";

export const StyledInput = styled.input`
    outline:none;
    appearance:none;
    min-width:0px;
    width:100%;
    border:2px solid #393A3C;
    background:transparent;
    font-size:0.875rem;
    font-family:inherit;
    color: inherit;
    height:2.5rem;
    border-radius:0.8rem;
    text-indent:0.5rem;
    &:focus {
        border:2px solid #0072F5;
        transform:translateY(-0.2rem);
    }

    &:focus::placeholder {
        opacity:0;
    }

    ::placeholder {
        transition:all 0.4s;
    }
    position:relative;
    transition:all 0.4s linear;
`