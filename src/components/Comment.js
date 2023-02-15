import ScoreCounter from './ScoreCounter';
import CommentDetails from './CommentDetails';

function Comment({ comment, methods }) {
	return (
		<div className='comment-container'>
			<div>
				<ScoreCounter id={comment.id} score={comment.score} methods={methods} />
			</div>
			<div className='comment-content'>
				<CommentDetails comment={comment} />
				<p className='comment-content-text'>{comment.content}</p>
			</div>
		</div>
	);
}

export default Comment;
