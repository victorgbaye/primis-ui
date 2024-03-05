import x from '../assets/images/x.svg'
import { Wrapper } from '../assets/wrappers/Modal.styles';
import  Button  from './Button';

interface ModalTypes{
    prompt?:string;
    title:string;
    closeModal: ()=> void;
    children: React.ReactNode;
    onConfirm: ()=> void;
    buttonLabel: string;
    backgroundColor?: string;
    isCanel?: boolean;

}

const Modal: React.FC<ModalTypes> = ({prompt, title, closeModal, buttonLabel, onConfirm, children, isCanel}) => {
  return (
    <Wrapper>
    <div className='Modal'>
        <header className='ModalHeader'>
            <h6>{title}</h6>
            <img src={x} alt="X Icon"  onClick={closeModal}/>
        </header>
        <div className='ModalBody'>
          <p>{prompt}</p>
          
        </div>
        <div className='ModalBody'>
        {children}
        </div>
        {

        <div className='ModalFooter'>
           {
             !isCanel && 
             (
               
               <>
               <Button onClick={onConfirm}>{buttonLabel}</Button>
               <Button onClick={closeModal} color='#222' variant='text'>Cancel</Button>
               </>
             )
             
           }

         
        </div>
        }
    </div>
</Wrapper>
  )
}

export default Modal