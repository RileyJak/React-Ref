async function main() {
	const url = "https://openlibrary.org/works/OL15638539W.json";

	try {
		const response = await fetch(url);
		console.log(response.ok, response.status);

		if (!response.ok) {
			throw new Error(`Something went wrong: ${response.status}`);
		}

		const json = await response.json();
		const { title, description, covers } = json;
		const { value } = description;
		console.log(covers[3]);

		const main = document.querySelector("main");
		const header = document.querySelector("header");

		main.insertAdjacentHTML("beforeend", `<p>${value}</p>`);
		main.insertAdjacentHTML(
			"beforeend",
			`<img src="https://covers.openlibrary.org/b/id/10422997-L.jpg"/>` // got image URL with this API address and pulled URL from the JSON https://openlibrary.org/api/books?bibkeys=ISBN:1568496591&format=json&jscmd=data
		);
		header.insertAdjacentHTML("beforeend", `<h1>${title}</h1>`);
	} catch (err) {
		console.error(err);
	}
}

main();
