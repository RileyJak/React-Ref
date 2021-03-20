import React, { useState } from "react";
import DogImage from "../api/dog-image";
import LoadingSpinner from "../../common/loading-spinner";
import ErrorMessage from "../../common/error-message";
import useGetDog from "./useGetDog";
import "../api/dogs.css";

function DogHook() {
	const [num, setNum] = useState(1);
	const [isLoading, errorMessage, data] = useGetDog(num);

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

export default DogHook;
