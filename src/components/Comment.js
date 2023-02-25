import { useContext } from 'react';
import commentSection from '../context/comments';
import ScoreCounter from './ScoreCounter';
import CommentTopBar from './CommentTopBar';
import ReplyDisplay from './ReplyDisplay';
import ReplyAdd from './ReplyAdd';
import EditComment from './EditComment';

function Comment({ comment }) {
	const {closeOpenedSections, postComments} = useContext(commentSection);
	
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
					<ScoreCounter id={comment.id} score={comment.score} />
				</div>
				<div className='container'>
					<div className='container'>
						<CommentTopBar comment={comment} />
						{comment.editOpen ? <EditComment comment={comment} /> : textContent}
					</div>
				</div>
			</div>
			{comment.addAnswer ? <ReplyAdd id={comment.id} /> : null}
			<ReplyDisplay comment={comment} onFocus={() => closeOpenedSections(postComments)}/>
		</div>
	);
}

export default Comment;
