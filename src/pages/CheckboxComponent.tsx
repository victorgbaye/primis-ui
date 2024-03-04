import { useState } from "react";
import  Checkbox  from "../components/Checkbox"

const CheckboxComponent = () => {
    const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
        <Checkbox 
        checked={isChecked}
        onChange={handleCheckboxChange}
        value="hello"/>
    </div>
  )
}

export default CheckboxComponent