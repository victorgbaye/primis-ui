import  Input  from '../components/Input'
import Sidebar from '../documentation/components/Sidebar'

const InputComponent = () => {
  return (
    <div>
      <Sidebar/>
      <Input placeholder='e.g Jon Doe' label='first name'/>
    </div>
  )
}

export default InputComponent