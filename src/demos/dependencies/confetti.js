import React, { useState } from "react";
import Confetti from "react-confetti";
import "./styles.css";

function ThrowConfetti() {
	const [isRunning, setIsRunning] = useState(false);
	const [numPieces, setNumPieces] = useState(200);

	const toggleConfetti = () => setIsRunning(!isRunning);
	const onPieceChange = (event) => {
		const newNumPieces = parseInt(event.target.value, 10);
		setNumPieces(newNumPieces);
	};

	const buttonText = isRunning ? "Turn Confetti Off" : "Turn Confetti On";

	return (
		<>
			<div>
				<label className="lab" htmlFor="numPieces">
					Num Pieces
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
			<div>
				<button className="dep-button" onClick={toggleConfetti}>
					{buttonText}
				</button>
			</div>
			<Confetti
				numberOfPieces={numPieces}
				gravity={0.2}
				wind={0.05}
				run={isRunning}
			/>
		</>
	);
}

export default ThrowConfetti;
