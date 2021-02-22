import React, { useState } from "react";
import Confetti from "react-confetti";
import "../../demos/dependencies/styles.css";

function Confetti2() {
	const [isRunning, setIsRunning] = useState(false);
	const [numPieces, setNumPieces] = useState(200);
	const [gravity, setGravity] = useState(0.1);
	const [wind, setWind] = useState(0);

	const toggleConfetti = () => setIsRunning(!isRunning);
	const onPieceChange = (event) => {
		const newNumPieces = parseInt(event.target.value, 10);
		setNumPieces(newNumPieces);
	};
	const onGravityChange = (event) => {
		const newGravity = parseFloat(event.target.value);
		setGravity(newGravity);
	};

	const onWindChange = (event) => {
		const newWind = parseFloat(event.target.value);
		setWind(newWind);
	};

	const buttonText = isRunning ? "Turn Confetti Off" : "Turn Confetti On";

	return (
		<div className="party-box">
			<div className="input_slider">
				<label className="lab" htmlFor="numPieces">
					Num Pieces:
				</label>
				<input
					type="range"
					id="numPieces"
					min="1"
					max="3000"
					step="1"
					value={numPieces}
					onChange={onPieceChange}
				></input>
			</div>

			<div className="input_slider">
				<label className="lab" htmlFor="Gravity">
					Gravity:
				</label>
				<input
					type="range"
					id="Gravity"
					min="0"
					max="1"
					step=".05"
					value={gravity}
					onChange={onGravityChange}
				></input>
			</div>

			<div className="input_slider">
				<label className="lab" htmlFor="wind">
					Wind:
				</label>
				<input
					type="range"
					id="wind"
					min="-1"
					max="1"
					step=".05"
					value={wind}
					onChange={onWindChange}
				></input>
			</div>

			<div className="party-box__button">
				<button className="dep-button" onClick={toggleConfetti}>
					{buttonText}
				</button>
			</div>

			<Confetti
				numberOfPieces={numPieces}
				gravity={0.2}
				wind={0.05}
				run={isRunning}
				confettiSource={{
					x: window.innerWidth / 2,
					y: window.innerHeight / 2,
				}}
				colors={["#e91e63", "#2196f3", "#CDDC39"]}
			/>
		</div>
	);
}

export default Confetti2;
