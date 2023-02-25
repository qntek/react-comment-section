import ScoreCounter from './ScoreCounter';
import CommentTopBar from './CommentTopBar';
import ReplyAdd from './ReplyAdd';
import EditComment from './EditComment';

function ReplyDisplay({ comment, methods, userDetails }) {
	const replies = [...comment.replies].map((reply) => {
		
		const textContent = (
			<p className='comment-content-text'>
				{reply.replyingTo ? (
					<span className='reply-to'>@{reply.replyingTo} </span>
				) : null}
				{reply.content}
			</p>
		);

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
							 {reply.editOpen ? <EditComment comment={reply} methods={methods}/> : textContent}
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
