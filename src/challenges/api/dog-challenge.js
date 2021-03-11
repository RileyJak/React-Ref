import React, { useEffect, useState } from "react";
import DogImage from "./dog-image";
import LoadingSpinner from "../../common/loading-spinner";
import ErrorMessage from "../../common/error-message";
import "./dogs.css";

function Dog() {
	const [dogFetch, setDogFetch] = useState({
		isLoading: true,
		errorMessage: "",
		data: null,
	});
	const { isLoading, errorMessage, data, input } = dogFetch;
	const [num, setNum] = useState(1);

	useEffect(() => {
		async function getDog() {
			try {
				const url = `https://dog.ceo/api/breeds/image/random/${num}`;
				const response = await fetch(url);

				if (!response.ok) {
					throw new Error(
						`Something went wrong server responded with ${response.status}`
					);
				}

				const json = await response.json();
				const { message } = json;

				setDogFetch({
					isLoading: false,
					errorMessage: "",
					data: message,
				});
			} catch (err) {
				setDogFetch({
					isLoading: false,
					errorMessage: "Something Went Wrong! Try Again Later",
					data: null,
				});
				console.error(err);
			}
		}

		getDog();
	}, [num]);

	const onNumChange = (event) => {
		const newNum = parseInt(event.target.value);
		setNum(newNum);
	};

	let contents;
	if (isLoading) contents = <LoadingSpinner />;
	else if (errorMessage !== "")
		contents = <ErrorMessage>{errorMessage}</ErrorMessage>;
	else contents = <DogImage array={data} />;

	return (
		<>
			<div>
				<label html="numdogs">{num} of Doggos:</label>
				<input
					type="range"
					max="50"
					min="1"
					id="numdogs"
					value={num}
					onChange={onNumChange}
				/>
			</div>

			{contents}
		</>
	);
}

export default Dog;
