import React, { useState } from 'react';
import "../Forms/Login.css";
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import Signup from '../Forms/Signup';
import Login from '../Forms/Login';


const Modals = ({open, closeModal}) => {

  const [switchForm, setSwitchForm] = useState(false);

  const openSecondModal = () => {
    setSwitchForm(true);
  };

  const closeSecondModal = () => {
    setSwitchForm(false);
  };

  return (
    <div>
       
      <Modal isOpen={open} onRequestClose={closeModal} className="fullscreen-modal" overlayClassName="fullscreen-overlay">
          <div className='flex justify-end m-5'>
            <button onClick={closeModal} className='font-bold'>{<AiOutlineClose style={{fontSize: '20px'}}/>}</button>
          </div>
        
        {switchForm ? <Signup openSignUP={openSecondModal} closeSignup={closeSecondModal} /> : <Login openSecondModal={openSecondModal} /> }
        
      </Modal>
    </div>
  )
}

export default Modals