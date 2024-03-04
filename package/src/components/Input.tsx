import { DefaultInput, Label } from "../assets/wrappers/Input.styles"

type InputProps = {
    label?: string,
    placeholder?:string
}
export const Input = (props: InputProps) => {
    return (
        <div className='input-label'>  
        <Label>{props.label}</Label>
        <DefaultInput
        placeholder={props.placeholder}
        />
    </div>
  )
}