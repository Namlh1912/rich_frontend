import React from "react"
import Modal from "react-responsive-modal"

const ConfirmModal = ({ open, onClose, message, onConfirm }) => {
  return (
    <Modal open={open} onClose={onClose} showCloseIcon={false} little>
      <h3 style={{ maxWidth: 300 }}>{message || "Are you sure?"}</h3>
      <div
        className="button-wrapper "
        style={{ marginTop: 30, overflow: "auto" }}
      >
        <button
          style={{ width: 80 }}
          className="btn btn-info pull-left"
          onClick={onConfirm}
        >
          Yes
        </button>
        <button
          style={{ width: 80 }}
          className="btn btn-danger pull-right"
          onClick={onClose}
        >
          No
        </button>
      </div>
    </Modal>
  )
}

export default ConfirmModal
