import React from 'react'

interface DeleteBookListingProps {
  onConfirm: () => void
  onCancel: () => void
}

const DeleteBookListing: React.FC<DeleteBookListingProps> = ({ onConfirm, onCancel }) => {
  return (
    <div className="delete-modal-overlay">
      <div className="delete-modal">
        <p>Are you sure you want to delete this listing?</p>
        <div className="delete-modal-buttons">
          <button onClick={onConfirm} className="confirm-delete">Yes, delete</button>
          <button onClick={onCancel} className="cancel-delete">Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteBookListing