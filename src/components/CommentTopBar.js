import replyIcon from '../images/icon-reply.svg';
import CommentDetails from './CommentDetails';
function CommentTopBar({ comment, onClick }) {
	return (
		<div className='comment-content'>
			<CommentDetails comment={comment} />
			<div className='comment-content-reply' onClick={onClick}>
				<img src={replyIcon} alt='' />
				Reply
			</div>
		</div>
	);
}
export default CommentTopBar;
