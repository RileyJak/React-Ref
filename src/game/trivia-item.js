import React, { useState } from "react";
import shuffle from "../common/utils/shuffle";
import "./trivia-item.css";

/**
 *
 * @param {object} props
 * @param {string} props.correctAnswer
 * @param {string[]} props.incorrectAnswers
 * @param {() => void} props.onNextClick
 * @param {(boolean) => void} props.onAnswerSelected
 */

function TriviaItem({
	correctAnswer,
	incorrectAnswers,
	question,
	onNextClick,
	onAnswerSelected,
}) {
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const hasPickedAnswer = selectedAnswer !== null;

	const allAnswers = [correctAnswer, ...incorrectAnswers];
	// should be shuffled to useEffect when we get to that point in class
	const [shuffledAnswers] = useState(() => shuffle(allAnswers));

	let nextButtonClass = "next-button";
	if (!hasPickedAnswer) nextButtonClass += " next-button--disabled";

	const onAnswerClick = (event) => {
		const playerAnswer = event.target.innerHTML;
		setSelectedAnswer(playerAnswer);
		const wasPlayerCorrect = playerAnswer === correctAnswer;
		onAnswerSelected(wasPlayerCorrect);
	};

	return (
		<div>
			<p className="trivia-item__question">{question}</p>
			<ul className="trivia-item__answers">
				{shuffledAnswers.map((answer, i) => {
					let className = "trivia-item__button";

					if (hasPickedAnswer) {
						const pickedThisAnswer = answer === selectedAnswer;
						const isThisCorrect = answer === correctAnswer;

						if (pickedThisAnswer && isThisCorrect) {
							className += " trivia-item__button--correct";
						} else if (pickedThisAnswer && !isThisCorrect) {
							className += " trivia-item__button--incorrect";
						} else {
							className += " trivia-item__button--disabled";
						}
					}

					return (
						<li key={answer}>
							<button
								onClick={onAnswerClick}
								className={className}
								disabled={hasPickedAnswer}
							>
								{answer}
							</button>
						</li>
					);
				})}
			</ul>
			<button
				className={nextButtonClass}
				onClick={onNextClick}
				disabled={!hasPickedAnswer}
			>
				Next ➡
			</button>
		</div>
	);
}

export default TriviaItem;
