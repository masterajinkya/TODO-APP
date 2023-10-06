import React from 'react'
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '15%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)'

  },
};

function Popup({ isOpen, onClose, onDelete }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Delete Confirmation"
      style={customStyles}
    >
      <h2>Confirm Deletion</h2>
      <p>Are you sure you want to delete this Todo?</p>
      <div className='text-left'>
        <button className='btn btn-warning ml-3' onClick={onClose}>Cancel</button>
        <button className='btn btn-danger' onClick={onDelete}>Delete</button>
      </div>

    </Modal>
  );

}
export default Popup
