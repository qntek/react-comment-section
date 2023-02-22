
import ScoreCounter from './ScoreCounter';
import CommentTopBar from './CommentTopBar';
import ReplyAdd from './ReplyAdd';

function ReplyDisplay({ comment, methods, userDetails }) {
	const replies = [...comment.replies].map((reply) => {
		return (
			<div key={reply.id} className='reply-container'>
				<div className='reply-line-container'>
					<div className='reply-line'></div>
					<div></div>
				</div>
				<div className='container'>
					<div className='comment-container'>
						<div>
							<ScoreCounter
								id={reply.id}
								score={reply.score}
								methods={methods}
							/>
						</div>
						<div className='container'>
							<CommentTopBar
								comment={reply}
								userDetails={userDetails}
								methods={methods}
							/>
							<p className='comment-content-text'>{reply.replyingTo ? <span className='reply-to'>@{reply.replyingTo} </span> : null}{reply.content}</p>
						</div>
					</div>
					{reply.addAnswer ? (
						<ReplyAdd
							userDetails={userDetails}
							id={reply.id}
							methods={methods}
						/>
					) : null}
				</div>
			</div>
		);
	});
	return replies;
}

export default ReplyDisplay;
