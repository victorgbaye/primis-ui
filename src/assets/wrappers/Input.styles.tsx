import styled from 'styled-components'

export const DefaultInput = styled.input`
    display: flex;
    width: 100%;
    min-width: 400px;
    height: 40px;
    padding: var(--XS, 8px) var(--SM, 16px);
    align-items: center;
    gap: var(--XS, 8px);
    align-self: stretch;
    border-radius: var(--XS, 8px);
    border: 1px solid #F8F8F8;
    background: #F8F8F8;
    outline: none;
    font-size: 14px;

    &:hover{
        border: 1px solid #5D55F7;
    }

    ::placeholder{
        color: var(--Grey-001, #A6A6A6);
        font-family: 'Quicksand';
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%; /* 22.4px */
    }
`;

export const Label = styled.label`
    color: var(--greys-primary-800, #383838);
    /* Button & Label/Caption */
    font-family: "Quicksand";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 19.2px */
    letter-spacing: 0.204px;
    /* text-transform: uppercase; */
`;