import "./ResetPopup.css";

const ResetPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>Check your email</h3>
        <p>Check your email to reset your password</p>
        <button className="close-btn" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default ResetPopup;
