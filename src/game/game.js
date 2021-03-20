import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EndScreen from "./end-screen";
import Stats from "./stats";
import TriviaItem from "./trivia-item";
import useSound from "use-sound";
import correctSFX from "../assets/sounds/correct.wav";
import incorrectSFX from "../assets/sounds/wrong.mp3";
import { FadeTransiton, FadeWrapper } from "./animations/fade-transition";

function Game({ triviaData }) {
	const [gameState, setGameState] = useState({
		score: 0,
		triviaIndex: 0,
		isGameOver: false,
		gameTime: new Date(),
	});

	const { score, triviaIndex, isGameOver, gameTime } = gameState;
	const questionNum = triviaIndex + 1;
	const numQuestions = triviaData.length;

	const triviaQuestion = triviaData[triviaIndex];
	const { difficulty } = triviaQuestion;

	const questionDifficulty =
		difficulty.charAt(0).toUpperCase() + difficulty.slice(1);

	const restartGame = () => {
		setGameState({
			score: 0,
			triviaIndex: 0,
			isGameOver: false,
			gameTime: new Date(),
		});
	};

	const loadNext = () => {
		if (triviaIndex >= triviaData.length - 1) {
			setGameState({
				...gameState,
				isGameOver: true,
				gameTime: new Date() - gameTime,
			});
		} else {
			setGameState({
				...gameState,
				triviaIndex: triviaIndex + 1,
			});
		}
	};

	const [correct] = useSound(correctSFX, { volume: 0.25 });
	const [incorrect] = useSound(incorrectSFX, { volume: 0.25 });

	const onAnswerSelected = (wasPlayerCorrect) => {
		if (wasPlayerCorrect) {
			correct();
			const questionDifficulty =
				difficulty.charAt(0).toUpperCase() + difficulty.slice(1);

			if (questionDifficulty === "Easy") {
				setGameState({
					...gameState,
					score: score + 1,
				});
			} else if (questionDifficulty === "Medium") {
				setGameState({
					...gameState,
					score: score + 2,
				});
			} else {
				setGameState({
					...gameState,
					score: score + 3,
				});
			}
		} else {
			incorrect();
		}
	};

	let pageContent;
	let pageKey;
	if (isGameOver) {
		pageKey = "End Screen";
		pageContent = (
			<EndScreen
				score={score}
				bestScore={score}
				onRetryClick={restartGame}
				time={gameTime}
			/>
		);
	} else {
		pageKey = triviaIndex;
		const { correct_answer, incorrect_answers, question } = triviaQuestion;
		pageContent = (
			<TriviaItem
				key={pageKey}
				question={question}
				correctAnswer={correct_answer}
				incorrectAnswers={incorrect_answers}
				onNextClick={loadNext}
				onAnswerSelected={onAnswerSelected}
			/>
		);
	}

	return (
		<>
			<Stats
				score={score}
				questionNum={questionNum}
				totalQuestions={numQuestions}
				difficulty={questionDifficulty}
			/>
			<FadeWrapper>
				<FadeTransiton key={pageKey}>{pageContent}</FadeTransiton>
			</FadeWrapper>
		</>
	);
}

export default Game;
