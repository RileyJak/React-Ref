async function fetchJson(url) {
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error(
			`Something went wrong server responded with ${response.status}`
		);
	}

	const json = await response.json();
	return json;
}

export default fetchJson;
