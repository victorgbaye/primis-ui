// CustomSelect.tsx
import styled from 'styled-components';

interface SelectButtonProps {
    isPlaceholder: boolean;
  }

export const StyledSelect = styled.div`
  position: relative;
  width: 200px;
`;

export const SelectButton = styled.button<SelectButtonProps>`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #fff;
    text-align: left;
    cursor: pointer;
    border-radius: var(--XS, 8px);
    border: 1px solid var(--cod-gray-border-divider, #E5E5E5);
    color: ${(props) => (props.isPlaceholder ? 'var(--Text-Disabled-Text, #D4D4D4)' : 'var(--Cod-Gray-Secondary-Text, #404040)')};
    font-family: 'Quicksand';
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 157.143% */
    letter-spacing: 0.5px;
`;

export const OptionList = styled.ul<{ isOpen: boolean }>`
    position: absolute;
    z-index: 1;
    width: 200px;
    padding: var(--XS, 8px);
    margin: 0;
    margin-top: 4px;
    list-style: none;
    border: 1px solid #ccc;
    background-color: #fff;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid red;
    border-radius: var(--XS, 8px);
    border: 1px solid var(--cod-gray-border-divider, #E5E5E5);
    background: var(--Neutral-Base, #FFF);
    box-shadow: -2px 2px 12.1px 0px rgba(0, 0, 0, 0.05);
`;


export const OptionItem = styled.li`
    padding: 8px;
    cursor: pointer;
    width: 100%;
    color: var(--Cod-Gray-Secondary-Text, #404040);
    font-family: 'Quicksand';
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 157.143% */
    letter-spacing: 0.5px;

  &:hover {
    border-radius: var(--XXS, 4px);
    background: var(--Base-2-Highlight, #EDF1FF);
  }
`;

// ... (other imports and styles)

