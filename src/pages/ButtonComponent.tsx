import Sidebar from "../documentation/components/Sidebar"
import ButtonExample from "../documentation/examples/ButtonExample";
import {Button} from 'primis-ui'
const ButtonComponent = () => {
  return (
    <>
    <Sidebar/>
   
    <div style={{display:'flex', gap:'18px', marginTop:'20px'}}>

        <ButtonExample/>
        <Button>sample</Button>
    </div>
    </>
  )
}

export default ButtonComponent