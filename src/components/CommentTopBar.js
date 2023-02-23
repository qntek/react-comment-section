import { useState } from 'react';
import ManageButton from './ManageButton';
import CommentDetails from './CommentDetails';
import Modal from './Modal';

function CommentTopBar({ comment, methods, userDetails }) {
	const [modalVisible, setModalVisibility] = useState(false);

	const hideModal = (e) => {
		e.stopPropagation();
		
		setModalVisibility(false);
	};

	const replyButton = (
		<ManageButton
			type='reply'
			onClick={() => methods.showReplyWindow(comment.id)}
		/>
	);

	const manageButtons = (
		<div className='flex'>
			<ManageButton type='delete' onClick={() => setModalVisibility(true)} />
			<ManageButton
				type='edit'
				onClick={() => console.log('TO BE IMPLEMENTED')}
			/>
		</div>
	);
	let displayedButtons;

	userDetails.username === comment.user.username
		? (displayedButtons = manageButtons)
		: (displayedButtons = replyButton);

	return (
		<div className='comment-content'>
			{modalVisible ? (
				<Modal
					onCancel={hideModal}
					onConfirm={() => methods.delComment(comment.id)}
				/>
			) : null}
			<CommentDetails comment={comment} />
			{displayedButtons}
		</div>
	);
}
export default CommentTopBar;
