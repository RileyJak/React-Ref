import React, { useEffect, useState } from "react";
import decodeData from "../../common/utils/decode";
import fetchJson from "../../common/utils/fetch";

function useGetTriviaData(amount = 10, difficulty = "") {
	const [quizFetch, setQuizFetch] = useState({
		isLoading: true,
		errorMessage: "",
		data: null,
	});

	useEffect(() => {
		async function getQuiz() {
			try {
				const params = new URLSearchParams({ amount, type: "multiple" });
				if (difficulty !== "") params.append("difficulty", difficulty);
				const url = `https://opentdb.com/api.php?${params.toString()}`;

				const json = await fetchJson(url);
				const { response_code, results } = json;

				if (response_code === 1) {
					throw new Error("Bad API Request: No Results");
				} else if (response_code === 2) {
					throw new Error("Bad API Request: Invalid Parameter");
				}

				// decode for HTML entities

				setQuizFetch({
					isLoading: false,
					errorMessage: "",
					data: decodeData(results),
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
	}, [amount, difficulty]);

	const { isLoading, errorMessage, data } = quizFetch;
	return [isLoading, errorMessage, data, amount];
}

export default useGetTriviaData;
