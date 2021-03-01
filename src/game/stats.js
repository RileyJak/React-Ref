import React from "react";
import "./stats.css";

function Stat({ label, value }) {
	return (
		<>
			<li className="stats__stat-container">
				<div className="stats__stat-label">{label}</div>
				<div className="stats__stat-value">{value}</div>
			</li>
		</>
	);
}
/**
 * on hover of function shows this
 * @param {object} props
 * @param {number} props.score
 * @param {number} props.questionNum
 * @param {number} props.totalQuestions
 * @param {string} props.difficulty
 */

function Stats({ score, questionNum, totalQuestions, difficulty }) {
	return (
		<>
			<ul className="stats">
				<Stat label="Score" value={score} />
				<Stat label="Difficulty" value={difficulty} />
				<Stat label="Question" value={`${questionNum} / ${totalQuestions}`} />
			</ul>
		</>
	);
}

export default Stats;
