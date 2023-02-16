import { useState } from 'react';

import data from './data';
import Comment from './components/Comment';

function App() {
	const [postComments, setData] = useState(data.comments);
	// const userDetails = data.currentUser;

	const handleScoreChange = (id, sign) => {
		let incrementDirection;
		sign === '+' ? (incrementDirection = 1) : (incrementDirection = -1);
		const result = postComments.map((comment) => {
			if (comment.id === id) {
				return { ...comment, score: comment.score + 1 * incrementDirection };
			} else if (comment.replies.length) {
				//dive deeper into replies section
				const updatedReplies = comment.replies.map((reply) => {
					if (reply.id === id) {
						return { ...reply, score: reply.score + 1 * incrementDirection };
					} else return { ...reply };
				});
				return { ...comment, replies: updatedReplies };
			} else return comment;
		});

		setData(sortComments(result));
	};
	const sortComments = (postComments) => {
		const result = postComments.sort((a, b) => b.score - a.score);
		return result;
	}

	// const sortReplies = (postComments) => {
	// 	const result = postComments.map((comment) => {
	// 		const sortedReplies = comment.replies.sort((a, b) => {
	// 			return b.score - a.score;
	// 		});
	// 		return { ...comment, replies: sortedReplies };
	// 	});
	// 	return result;
	// };

	const methods = { handleScoreChange };

	const comments = postComments.map((comment) => {
		return <Comment key={comment.id} comment={comment} methods={methods} />;
	});

	return <div>{comments}</div>;
}

export default App;
