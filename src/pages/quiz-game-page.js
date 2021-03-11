import React, { useEffect, useState } from "react";
import he from "he";
import Game from "../game/game";
import LoadingSpinner from "../common/loading-spinner";
import ErrorMessage from "../common/error-message";

function QuizGamePage() {
	const [quizFetch, setQuizFetch] = useState({
		isLoading: true,
		errorMessage: "",
		data: null,
	});
	const { isLoading, errorMessage, data } = quizFetch;

	useEffect(() => {
		async function getQuiz() {
			try {
				const url = "https://opentdb.com/api.php?amount=5&type=multiple";
				const response = await fetch(url);

				if (!response.ok) {
					throw new Error(
						`Something went wrong server responded with ${response.status}`
					);
				}

				const json = await response.json();
				const { response_code, results } = json;

				if (response_code === 1) {
					throw new Error("Bad API Request: No Results");
				} else if (response_code === 2) {
					throw new Error("Bad API Request: Invalid Parameter");
				}

				// decode for HTML entities
				const decodedResults = results.map((item) => {
					return {
						...item,
						question: he.decode(item.question),
						correct_answer: he.decode(item.correct_answer),
						incorrect_answers: item.incorrect_answers.map((incorrect) =>
							he.decode(incorrect)
						),
					};
				});

				setQuizFetch({
					isLoading: false,
					errorMessage: "",
					data: decodedResults,
				});
			} catch (err) {
				setQuizFetch({
					isLoading: false,
					errorMessage: "Something Went Wrong! Try Again Later",
					data: null,
				});
				console.error(err);
			}
		}

		getQuiz();

		// in future clean up if user leaves page before fetch finishes running
	}, []);

	let contents;
	if (isLoading) contents = <LoadingSpinner />;
	else if (errorMessage !== "")
		contents = <ErrorMessage>Something Went Wrong</ErrorMessage>;
	else contents = <Game triviaData={data} />;

	return <>{contents}</>;
}

export default QuizGamePage;
