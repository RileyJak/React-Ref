import React from "react";
import "./dogs.css";

function DogImage({ array }) {
	return (
		<>
			{array.map((dog) => {
				return <img src={dog} />;
			})}
		</>
	);
}

export default DogImage;
