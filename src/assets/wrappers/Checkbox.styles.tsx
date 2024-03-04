import styled from 'styled-components'
import check from '../images/check.svg'


export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  &:hover input { /* Targeting the input (CustomCheckbox) inside the wrapper on hover */
    border: 1px solid #5D55F7; /* Change the border color on hover */
  }
`;

export const CustomCheckbox = styled.input`
 appearance: none;
  width: 16px;
  height: 16px;
  /* margin-right: 8px; */
  border: 1px solid #E3E3E3;
  border-radius: 4px;
  outline: none;

  &:checked {
    background-color: #5D55F7;
    border-color: #5D55F7;
    cursor: pointer;

    
  }

  &::after {
    content: '';
    background-image: url(${check});
    background-size: cover; 
    background-position: center;
    display: inline-block;
    width: 14px; 
    height: 14px;
    visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:checked::after {
    visibility: visible;
  }
`;
export const CheckboxValue = styled.p`
    color: var(--Text-Secondary-Text, #585858);
    /* font-family: "DM Sans"; */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: 0.5px;
    margin-left: 8px; 


`;

// export const CheckboxInput = styled.input`
//     display: flex;
//     height: var(--LG, 24px);
//     padding: 0px var(--XS, 8px);
//     align-items: center;
//     gap: 10px;
//     border-radius: var(--XXS, 4px);
//     border: 1px solid var(--cod-gray-border-divider, #E5E5E5);
//     background: var(--Cod-Gray-Surface, #FAFAFA);
//     margin-left: 8px; /* Adjust spacing as needed */

// `;