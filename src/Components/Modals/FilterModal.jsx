import React from 'react'
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

const FilterModal = ({ venues, CloseVenue}) => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
  return (
    <>
    <Modal isOpen={venues} onRequestClose={CloseVenue} className={isMobile ? 'mobile-modal' : 'fullscreen-modal'} overlayClassName={isMobile ? 'mobile-overlay' : 'fullscreen-overlay'}>
          <div className='flex justify-end p-5 md:p-0'>
            <button onClick={CloseVenue} className='font-bold'>{<AiOutlineClose style={{fontSize: '20px'}}/>}</button>
          </div>
        
          <p>dsdsd</p>
        
      </Modal>

    </>
  )
}

export default FilterModal