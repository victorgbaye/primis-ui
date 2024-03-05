import Sidebar from "../documentation/components/Sidebar"
import ButtonExample from "../documentation/examples/ButtonExample";
const ButtonComponent = () => {
  return (
    <>
    <Sidebar/>
   
    <div style={{display:'flex', gap:'18px', marginTop:'20px'}}>

        <ButtonExample/>

    </div>
    </>
  )
}

export default ButtonComponent