import { CheckboxValue, CheckboxWrapper, CustomCheckbox } from "../assets/wrappers/Checkbox.styles";
type Checkbpxprop = {
    checked?: boolean;
    onChange?: () => void;
    value:string
 }
export const Checkbox = (props: Checkbpxprop) => {
    const handleInputClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.stopPropagation();
      };
    return (
        <CheckboxWrapper onClick={props.onChange}>
        <CustomCheckbox type='checkbox'  checked={props.checked} onChange={props.onChange} onClick={handleInputClick}/>
        <CheckboxValue >{props.value}</CheckboxValue>
      </CheckboxWrapper>
    );
  };