import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import Button from './Button';

function Modal({ onCancel, onConfirm }) {
	const element = document.querySelector('body');
	useEffect(() => {
		element.classList.add('overflow-hidden');
		return () => element.classList.remove('overflow-hidden');
	}, []);

	useEffect(() => {
		const modalBackdrop = document.querySelector('.modal-container');
		modalBackdrop.addEventListener('click', onCancel);
		return () => modalBackdrop.removeEventListener('click', onCancel);
	}, []);

	const modalWindow = (
		<div className='modal-container'>
			<div className='modal-window'>
				<p className='modal-header'>Delete comment</p>
				<p className='modal-text'>
					Are you sure you wat to delete this comment? This will remove the
					comment and can't be undone.
				</p>
				<div className='modal-buttons'>
					<Button className={'modal-cancel'} onClick={onCancel}>
						NO, CANCEL
					</Button>
					<Button className={'modal-confirm'} onClick={onConfirm}>
						YES, DELETE
					</Button>
				</div>
			</div>
		</div>
	);

	return createPortal(modalWindow, element);
}

export default Modal;
