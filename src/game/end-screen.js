import React from "react";
import "./end-screen.css";

function EndStat({ label, value }) {
	return (
		<li className="end-screen__stat">
			<div className="end-screen__stat-label">{label}</div>
			<div className="end-screen__stat-value">{value}</div>
		</li>
	);
}

/**
 *
 * @param {object} props
 * @param {number} props.score
 * @param {number} props.bestScore
 * @param {() => void} props.onRetryClick
 *
 */

function EndScreen({ score, bestScore, onRetryClick, time }) {
	return (
		<div className="end-screen">
			<h1>Game Completed!</h1>
			<div className="end-screen__trophy">🏆</div>
			<ul className="end-screen__stat-container">
				<EndStat label="Your Score" value={score} />
				<EndStat
					label="Your Time"
					value={`${(time / 1000).toFixed(2)} seconds`}
				/>
				<EndStat label="Top Score" value={bestScore} />
			</ul>

			<button className="end-screen__button" onClick={onRetryClick}>
				Play Again?
			</button>
		</div>
	);
}

export default EndScreen;
