import { useState, useRef } from 'react';
import Button from './Button';
import ScoreCounter from './ScoreCounter';

function EditComment({ comment, methods}) {
	const [text, setText] = useState('');
	const reference = useRef();

	const handleChange = () => {
		setText(reference.current.value);
	};

	return (
		<div className='container'>
			<div className='flex'>
				<textarea
					value={text}
					ref={reference}
					className={'reply-add-textarea'}
					onInput={handleChange}
				/>
				<Button
					className={'margin-left'}
					onClick={() => methods.editComment(comment.id, text)}>
					UPDATE
				</Button>
			</div>
		</div>
	);
}

export default EditComment;
