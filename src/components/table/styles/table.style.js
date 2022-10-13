import styled from 'styled-components';

export const StyledTable = styled.table`
    font-family:inherit;
    width:100%;
    text-align:left;
    border-collapse:separate;
    font-size:clamp(0.3rem, -0.375rem + 8.333333vw, 1rem);
    border-spacing:0;
`;

export const THead = styled.thead`
`;

export const TFoot = styled.tfoot`
`;

export const TBody = styled.tbody`
`;

export const TR = styled.tr`

`;

export const TH = styled.th`
    padding:1rem 2rem 1rem 2rem;
    background-color:rgba(17,17,17,1);
    &:first-child {
        border-top-left-radius:0.65rem;
        border-bottom-left-radius:0.65rem;
    }
    &:last-child {
        border-top-right-radius:0.65rem;
        border-bottom-right-radius:0.65rem;
    }
    
`;

export const TD = styled.td`
    padding:1rem 2rem 1rem 2rem;
`;