import './Modal.style.css';

const Modal = ({ children, isOpen, closeModal, handleModalContainerClick }) => {
	return (
		<article onClick={closeModal} className={`modal ${isOpen && 'is-open'}`}>
			<div className="modal-container" onClick={handleModalContainerClick}>
				<button onClick={closeModal} className="modal-close btn">
					X
				</button>
				{children}
			</div>
		</article>
	);
};

export default Modal;
