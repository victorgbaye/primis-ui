import React, { useState, useRef, useEffect } from 'react';
import { OptionItem, OptionList, SelectButton, StyledSelect } from '../assets/wrappers/Select.styles';

interface Option {
    value: string;
    label: string;
  }

interface CustomSelectProps {
    options: Option[];
    onChange: (value: string) => void;
    defaultValue?: string;
    placeholder?: string;
  }
const Select: React.FC<CustomSelectProps> = ({
    options,
    onChange,
    defaultValue = '',
    placeholder = 'Select an option',
  }) => {
    const [selectedValue, setSelectedValue] = useState<string>(defaultValue);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const selectRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
        const handleOutsideClick = (event: Event) => {
          if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
            setIsOpen(false);
          }
        };
      
        window.addEventListener('mousedown', handleOutsideClick);
      
        return () => {
          window.removeEventListener('mousedown', handleOutsideClick);
        };
      }, []);
      
  
    const handleSelectClick = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionClick = (value: string) => {
        setIsOpen(false); // Close the OptionList when an option is selected
      setSelectedValue(value);
      onChange(value);
      
    };
  
    return (
      <StyledSelect ref={selectRef}>
        <SelectButton onClick={handleSelectClick} isPlaceholder={!selectedValue}>
          {selectedValue ? selectedValue : placeholder}
        </SelectButton>
        <OptionList isOpen={isOpen}>
          {options.map((option) => (
            <OptionItem key={option.value} onClick={() => handleOptionClick(option.value)}>
              {option.label}
            </OptionItem>
          ))}
        </OptionList>
      </StyledSelect>
    );
  };
  
  export default Select;
  