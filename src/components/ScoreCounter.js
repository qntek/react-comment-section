import { useMediaQuery } from 'react-responsive';
import plusIcon from '../images/icon-plus.svg';
import minusIcon from '../images/icon-minus.svg';

function ScoreCounter({ id, score, methods }) {
	let orientationClass;
	useMediaQuery({ query: '(min-width: 576px)' })
		? (orientationClass = 'score_counter-container-vertical')
		: (orientationClass = 'score_counter-container-horizontal');

	const handleScoreChange = (id, sign) => {
		if (score === 0 && sign === '-') return;
		else if (score === 999 && sign === '+') return;
		else methods.handleScoreChange(id, sign);
	};

	return (
		<div className={`score_counter-container ${orientationClass}`}>
			<button
				onClick={() => {
					handleScoreChange(id, '+');
				}}
				className='score_counter-button'>
				<img className='score_counter-img' src={plusIcon} alt='' />
			</button>
			<span className='score_counter-score'>{score}</span>
			<button
				onClick={() => {
					handleScoreChange(id, '-');
				}}
				className='score_counter-button'>
				<img className='score_counter-img' src={minusIcon} alt='' />
			</button>
		</div>
	);
}

export default ScoreCounter;
