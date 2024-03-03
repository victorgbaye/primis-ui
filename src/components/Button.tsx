import styled from 'styled-components'

export const Button = styled.button`
    /* Style */
    background: var(--Base-2-Primary, #5D55F7);
    color: var(--Base-2-Highlight, #EDF1FF);
    padding: 0px var(--SM, 16px);
    border-radius: var(--XS, 8px);
    border: 1px solid #5D55F7;
    display: flex;
    height: 36px;
    justify-content: center;
    align-items: center;
    gap: var(--SM, 8px);
    cursor: pointer;
`;
interface ExtendedButtonProps{
    backgroundColor?:string;
    border?:string;
    color?:string;
}
export const ExtendedButton = styled(Button)<ExtendedButtonProps>`
    background: ${(props) => props.backgroundColor};
    border: ${(props) => props.border};
    color: ${(props) => props.color};
`