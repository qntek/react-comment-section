function CommentDetails({ comment }) {
  const image = require(`../${comment.user.image.png.slice(2)}`);
    return (
      <div className="comment-detail-container">
        <img className="comment-detail-img" src={image} alt={comment.user.image.png} />
        <p className="comment-detail-name">
          {comment.user.username} <span className="comment-detail-time">{comment.createdAt}</span>
        </p>
      </div>
    );
  }
  
  export default CommentDetails;