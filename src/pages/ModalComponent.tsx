import { useState } from "react"
import Modal from "../components/Modal"
import { Button } from "../components/Button"

const ModalComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div>
        <Button onClick={()=>setIsModalOpen(true)}>Open Modal</Button>
        {
        isModalOpen &&
        <Modal title="Sample Modal" buttonLabel="Save" closeModal={()=> setIsModalOpen(false)} onConfirm={()=>setIsModalOpen(false)}>
            <p>Hello world</p>
        </Modal>
        }
    </div>
  )
}

export default ModalComponent