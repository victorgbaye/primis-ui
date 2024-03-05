import styled from 'styled-components';

// Adjust the type for the button variant prop to make 'variant' optional
type ButtonVariant = 'outline' | 'text';

// Update the props for the StyledButton component
interface StyledButtonProps {
  variant?: ButtonVariant; // Now optional
}

 const Button = styled.button<StyledButtonProps>`
    /* Style */
    background: var(--Base-2-Primary, #5D55F7);
    color: ${props => (props.variant === 'text' || props.variant === 'outline') ? 'var(--Base-2-Primary, #5D55F7)' : 'var(--Base-2-Highlight, #EDF1FF)'};
    border-radius: var(--XS, 8px);
    border: ${props => (props.variant === 'outline') ? '1px solid #5D55F7' : 'transparent'};
    display: flex;
    height: 36px;
    justify-content: center;
    align-items: center;
    gap: var(--SM, 8px);
    cursor: pointer;
    background-color: ${props => props.variant === 'outline' || props.variant === 'text' ? 'transparent' : 'var(--Base-2-Primary, #5D55F7)'};

       /* Disabled state styles */
       &:disabled {
        color: var(--Text-Disabled-Text, #D4D4D4);
        background: var(--General-Surface, #FAFAFA);
        border: 1px solid transparent; /* Optional: Adjust the border for disabled state if needed */
        cursor: not-allowed;
    }
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

export default Button