import React, { useState } from 'react';
import "./Modal.css";
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import Signup from '../Forms/Signup';
import Login from '../Forms/Login';


const Modals = ({open, closeModal}) => {

  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  const [switchForm, setSwitchForm] = useState(false);

  const openSecondModal = () => {
    setSwitchForm(true);
  };

  const closeSecondModal = () => {
    setSwitchForm(false);
  };

  return (
    <div>
       
      <Modal isOpen={open} onRequestClose={closeModal} className={isMobile ? 'mobile-modal' : 'fullscreen-modal'} overlayClassName={isMobile ? 'mobile-overlay' : 'fullscreen-overlay'}>
          <div className='flex justify-end p-5 md:p-0'>
            <button onClick={closeModal} className='font-bold'>{<AiOutlineClose style={{fontSize: '20px'}}/>}</button>
          </div>
        
          {switchForm ? <Signup openSignUP={openSecondModal} closeSignup={closeSecondModal} /> : <Login openSecondModal={openSecondModal} /> }
        
      </Modal>

    </div>
  )
}

export default Modals