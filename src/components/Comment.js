import ScoreCounter from './ScoreCounter';
import CommentTopBar from './CommentTopBar';
import ReplyDisplay from './ReplyDisplay';
import ReplyAdd from './ReplyAdd';
import EditComment from './EditComment';

function Comment({ comment, methods, userDetails }) {
	const textContent = (
		<p className='comment-content-text'>
			{comment.replyingTo ? (
				<span className='reply-to'>@{comment.replyingTo} </span>
			) : null}{' '}
			{comment.content}
		</p>
	);

	return (
		<div className='container'>
			<div className='comment-container'>
				<div>
					<ScoreCounter
						id={comment.id}
						score={comment.score}
						methods={methods}
					/>
				</div>
				<div className='container'>
					<div className='container'>
						<CommentTopBar
							comment={comment}
							userDetails={userDetails}
							methods={methods}
						/>
					 {comment.editOpen ? <EditComment comment={comment} methods={methods}/> : textContent}
					</div>
				</div>
			</div>

			{comment.addAnswer ? (
				<ReplyAdd userDetails={userDetails} id={comment.id} methods={methods} />
			) : null}
			<ReplyDisplay
				comment={comment}
				userDetails={userDetails}
				methods={methods}
			/>
		</div>
	);
}

export default Comment;
