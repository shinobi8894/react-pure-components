import { FONT_FAMILY } from "configs/style.config";
import styled from "styled-components";

export const ToastContainer = styled.div`
    border: 2px solid transparent;
    background-color:rgba(17,17,17,.8);
    border-radius: 0.25rem;
    max-width: 20rem;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, .2);
    margin-top: 1rem;
    display: flex;
    position: relative;
    cursor: pointer;
    color:white;
`

export const ToastContent = styled.div`
    padding: 0.8rem 1.4rem;
    line-height: 1.4;
`

export const ToastWrapper = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    font-family:${FONT_FAMILY};
    z-index:15;
`