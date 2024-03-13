import x from '../assets/images/x.svg'
// import { Wrapper } from '../assets/wrappers/Modal.styles';
import  Button  from './Button';


import styled from 'styled-components'

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.50);
    backdrop-filter: blur(2px);

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100000;
    min-width: 600px;
    &.show {
        opacity: 1; /* Fully visible */
        transform: translateY(0); /* Move to final position */
        visibility: visible; /* Make visible */
    }

    .Modal{
    background: white;
    padding: 20px;
    border-radius: 12px;
    min-width: 400px;
    width: auto;
    border: 1px solid var(--cod-gray-border-divider, #E5E5E5);

  }
.ModalHeader{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 20px;

    h6{
        color: var(--Cod-Gray-Primary-Text, #171717);
        font-family: 'Quicksand';
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 30px; /* 150% */
        letter-spacing: 0.15px;
    }

    img{
        padding: 8px;
        border-radius: 100%;
        cursor: pointer;
    }
    img:hover{
        background: #EFEFEF;
    }
}


.ModalBody{
    margin-bottom: 20px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
}

.ModalFooter{
    display: flex;
    gap: 8px;
    justify-content: flex-end;
}
`;

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