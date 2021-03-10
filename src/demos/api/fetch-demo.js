async function main() {
	console.log("Fetch started");
	const url = "https://opentdb.com/api.php?amount=5&type=multiple";
	//const url = "https://httpstat.us/404";

	try {
		const response = await fetch(url);

		// throw us to the catch if error
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

		results.forEach((triviaItem, index) => {
			const {
				question,
				difficulty,
				correct_answer,
				incorrect_answers,
			} = triviaItem;
		});

		const main = document.querySelector("main");

		results.forEach((triviaItem) => {
			main.insertAdjacentHTML("beforeend", `<p>${triviaItem.question}</p>`);
		});
	} catch (err) {
		console.error(err);
	}
}

main();
