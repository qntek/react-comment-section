import ScoreCounter from './ScoreCounter';
import CommentDetails from './CommentDetails';

function Comment({ comment, methods }) {
	const replies = [...comment.replies].map((reply) => {
		return (
			<div key={reply.id} className='comment-container'>
				<div>
					<ScoreCounter id={reply.id} score={reply.score} methods={methods} />
				</div>
				<div className='comment-content'>
					<CommentDetails comment={reply} />
					<p className='comment-content-text'>{reply.content}</p>
				</div>
			</div>
		);
	});
	return (
		<div>
			<div className='comment-container'>
				<div>
					<ScoreCounter
						id={comment.id}
						score={comment.score}
						methods={methods}
					/>
				</div>
				<div className='comment-content'>
					<CommentDetails comment={comment} />
					<p className='comment-content-text'>{comment.content}</p>
				</div>
			</div>
			{replies}
		</div>
	);
}

export default Comment;
