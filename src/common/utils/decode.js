import he from "he";
function decodeData(results) {
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

	return decodedResults;
}

export default decodeData;
