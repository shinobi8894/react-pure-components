import styled from "styled-components";

export const StyledModal = styled.div`
    background-color:#16181A;
    width:100%;
    max-width:25rem;
    padding:2rem 1rem 2rem 1rem;
    border-radius:0.8rem;
    z-index:inherit;
    position:relative;
`

export const Model = styled.div`
    position: fixed;
    z-index:inherit;
    inset:0;
    background: rgba(0,0,0,0.5);
    padding:1.25rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

export const ModalWrapper = styled.div`
    position:fixed;
    overflow:auto;
    z-index:10;
    inset:0;
    display:${(props) => props.show ? "flex" : "none"};
    flex-direction:row;
    justify-content:center;
    align-items:center;
    padding:1.25rem;
`