import styled from 'styled-components'

export const CustomToggleWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;
`;

export const ToggleInput = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 0;
  height: 0;
  opacity: 0;
`;

export const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 15px;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: "";
    height: 11px;
    width: 11px;
    left: 4px;
    right: 4px;
    bottom: 5px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }

  ${ToggleInput}:checked + & {
    background-color: #5D55F7;
  }

  ${ToggleInput}:checked + &:before {
    transform: translateX(16px);
  }
`;