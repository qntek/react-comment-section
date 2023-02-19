
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
				<div>
					<div>
						<CommentTopBar comment={comment} onClick={() => methods.showReplyWindow(comment.id)}/>
						<p className='comment-content-text'>{comment.content}</p>
					</div>
				</div>
			</div>

			{comment.addAnswer ? (
				<ReplyAdd userDetails={userDetails} id={comment.id} methods={methods} />
			) : null}
			<ReplyDisplay comment={comment} userDetails={userDetails} methods={methods} />
		</div>
	);
}

export default Comment;
