import { useState, useRef } from 'react';
import Button from './Button';

function ReplyAdd({ id, methods, userDetails, onFocus }) {
	const [text, setText] = useState('');
	const image = require(`../${userDetails.image.png.slice(2)}`);
	const reference = useRef();

	const handleChange = () => {
		setText(reference.current.value);
	};

	let buttonToRender;
	id === 'new'
		? (buttonToRender = (
				<Button onClick={() => {methods.addReply('new', text); setText('')}}>SEND</Button>
		  ))
		: (buttonToRender = (
				<Button onClick={() => methods.addReply(id, text)}>REPLY</Button>
		  ));

	return (
		<div className='comment-container'>
			<img className={'reply-add-img'} src={image} alt={userDetails.username} />
			<textarea
				value={text}
				ref={reference}
				className={'reply-add-textarea'}
				onInput={handleChange}
				onFocus={onFocus}
			/>
			{buttonToRender}
		</div>
	);
}

export default ReplyAdd;
