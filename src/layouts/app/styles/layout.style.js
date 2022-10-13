import styled from "styled-components";
import { BG_COLOR, FONT_COLOR, FONT_FAMILY } from "configs/style.config";

export const Wrapper = styled.section`
    background-color:${BG_COLOR};
    min-height:100vh;
    padding:0 1.25rem;
    overflow:auto;
    color:${FONT_COLOR};
    font-family:${FONT_FAMILY};
    position:relative;
`