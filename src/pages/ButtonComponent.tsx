import { Button } from "../components/Button"

const ButtonComponent = () => {
  return (
    <div style={{display:'flex', gap:'18px'}}>
        <Button>Component</Button>
        <Button variant="outline" >Component</Button>
        <Button variant="text">Component</Button>
        <Button disabled>Component</Button>

    </div>
  )
}

export default ButtonComponent