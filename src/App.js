import { useState } from 'react';

import data from './data';
import Comment from './components/Comment';

function App() {
	const [postComments, setData] = useState(data.comments);
	// const userDetails = data.currentUser;
	
	const handleScoreChange = (id, sign) => {
		let incrementDirection
		sign === '+' ? incrementDirection = 1 : incrementDirection = -1;
		const result = postComments.map((comment) => {
			if (comment.id === id) {
				return { ...comment, score: comment.score + (1 * incrementDirection) };
			} else return comment;
		});
		setData(result);
	};


	const methods = { handleScoreChange };

	const comments = postComments.map((comment) => {
		return <Comment key={comment.id} comment={comment} methods={methods} />;
	});

	return <div>{comments}</div>;
}

export default App;
