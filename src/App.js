import { useState, useEffect } from 'react';

import data from './data';
import Comment from './components/Comment';

function App() {
	const [postComments, setData] = useState(data.comments);
	const userDetails = data.currentUser;

	useEffect(() => {
		const addAnswerWindow = postComments.map((comment) => {
			const replies = comment.replies.map((reply) => {
				if (!reply) return;
				return { ...reply, addAnswer: false };
			});
			return { ...comment, replies, addAnswer: false };
		});
		setData(addAnswerWindow);
	}, []);

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

	const showReplyWindow = (id) => {
		const result = postComments.map((comment) => {
			const replies = comment.replies.map((reply) => {
				if (reply.id === id) {
					return { ...reply, addAnswer: !reply.addAnswer };
				} else {
					return { ...reply, addAnswer: false };
				}
			});
			if (comment.id === id) {
				return { ...comment, replies, addAnswer: !comment.addAnswer };
			} else {
				return { ...comment, replies, addAnswer: false };
			}
		});
		setData(result);
	};

	const sortComments = (postComments) => {
		const result = postComments.sort((a, b) => b.score - a.score);
		return result;
	};

	const methods = { handleScoreChange, showReplyWindow };

	const comments = postComments.map((comment) => {
		return (
			<Comment
				key={comment.id}
				userDetails={userDetails}
				comment={comment}
				methods={methods}
			/>
		);
	});

	return <div>{comments}</div>;
}

export default App;
