import { useState, useEffect } from 'react';

import data from './data';
import Comment from './components/Comment';
import generateID from './utilities/generateID';
import ReplyAdd from './components/ReplyAdd';

function App() {
	const [postComments, setData] = useState(data.comments);
	const userDetails = data.currentUser;

	useEffect(() => {
		closeAddSections(postComments);
	}, []);

	function closeAddSections(obj) {
		const addAnswerWindow = obj.map((comment) => {
			const replies = comment.replies.map((reply) => {
				return { ...reply, addAnswer: false };
			});
			return { ...comment, replies, addAnswer: false };
		});
		setData(addAnswerWindow);
	}

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

	const sortComments = (obj) => {
		const result = obj?.sort((a, b) => b.score - a.score);
		return result;
	};

	const addReply = (id, text) => {
		if (text === '') {
			closeAddSections(postComments);
			return;
		}

		const newComment = {
			id: generateID(postComments),
			content: text,
			createdAt: 'now',
			score: 0,
			user: {
				image: {
					png: userDetails.image.png,
					webp: userDetails.image.webp,
				},
				username: userDetails.username,
			},
		};
		let result;
		if (id === 'new') {
			newComment.replies = [];
			result =  [...postComments, newComment] ;
		} else {
			result = postComments.map((comment) => {
				if (comment.id === id) {
					newComment.replyingTo = comment.user.username;
					return { ...comment, replies: [...comment.replies, newComment] };
				} else {
					const updatedReplies = comment.replies.map((reply) => {
						if (reply.id === id) {
							newComment.replyingTo = reply.user.username;
							return [reply, newComment];
						} else {
							return { ...reply };
						}
					});

					return { ...comment, replies: updatedReplies.flat() };
				}
			});
		}
		closeAddSections(result);
	};

	const delComment = (id) => {
		const result = postComments.map((comment) => {
			const replies = comment.replies.filter((reply) => reply.id !== id);

			return { ...comment, replies };
		});

		setData(result.filter((comment) => comment.id !== id));
	};

	const methods = { handleScoreChange, showReplyWindow, addReply, delComment };

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

	return (
		<div className='container'>
			{comments}
			<ReplyAdd id={'new'} methods={methods} userDetails={userDetails} />
		</div>
	);
}

export default App;
