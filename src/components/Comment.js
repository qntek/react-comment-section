import ScoreCounter from './ScoreCounter';
import CommentTopBar from './CommentTopBar';
import ReplyDisplay from './ReplyDisplay';
import ReplyAdd from './ReplyAdd';

function Comment({ comment, methods, userDetails }) {
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
						<p className='comment-content-text'>
							{comment.replyingTo ? (
								<span className='reply-to'>@{comment.replyingTo} </span>
							) : null}{' '}
							{comment.content}
						</p>
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
