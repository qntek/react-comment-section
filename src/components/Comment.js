import MediaQuery from 'react-responsive';
import { useMediaQuery } from 'react-responsive';

import ScoreCounter from './ScoreCounter';

function Comment({ comment, methods }) {

	return (
		<div>
		<ScoreCounter id={comment.id} score={comment.score} orientation={'vertical'} methods={methods}/>
			{/* <MediaQuery minWidth={576}>
				<p>You are a desktop or laptop</p>
				<MediaQuery minWidth={1200}>
					<p>You also have a huge screen</p>
				</MediaQuery>
			</MediaQuery> */}
		</div>
	);
}

export default Comment;
