function ReplyAdd({ id, methods, userDetails }) {
	const image = require(`../${userDetails.image.png.slice(2)}`);
	return (
		<div className='comment-container'>
			<img className={'reply-add-img'} src={image} alt={userDetails.username} />
			<textarea className={'reply-add-textarea'} />
			<button className='reply-add-button'>REPLY</button>
		</div>
	);
}

export default ReplyAdd;
