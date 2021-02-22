import { useState } from "react";
import "./button-click.css";

function ButtonClick() {
	const [numClicks, setNumClicks] = useState(0);
	const onButtonClick = () => {
		setNumClicks(numClicks + 1);
	};
	const [numRacoon, setRacoonNum] = useState(0);
	const onButtonTap = () => {
		setRacoonNum(numRacoon + 1);
	};

	const clicksEmoji = "🦝".repeat(numRacoon); // adds emoji to text for each click

	// ============================================= //
	//these two do the same thing just diffrent syntax
	let text = ``;
	if (numClicks === 0) text = "Click Me!";
	else text = `You clicked the button ${numClicks}x times`;

	const content = numRacoon === 0 ? "Start Your Racoon Farm" : `${clicksEmoji}`;
	// ============================================= //

	const buttonStyle1 = {
		width: "150px",
		margin: "3rem",
		transform: `rotate(${numClicks * 25}deg)`,
		transition: "all 0.2s",
	};

	const buttonStyle2 = {
		width: "400px",
		transform: `rotate(${numRacoon * 15}deg)`,
		transition: "all 0.2s",
		margin: "3rem",
	};

	return (
		<>
			<button className="button" style={buttonStyle1} onClick={onButtonClick}>
				{text}
			</button>
			<button className="button" style={buttonStyle2} onClick={onButtonTap}>
				{content}
			</button>
		</>
	);
}
export default ButtonClick;
