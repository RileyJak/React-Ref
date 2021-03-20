import React from "react";
import { motion } from "framer-motion";
import "./end-screen.css";
import { Spin } from "./animations/spin";
import { Hinge } from "./animations/hinge";

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

			<Spin>🏆</Spin>

			<Hinge>
				<ul className="end-screen__stat-container">
					<EndStat label="Your Score" value={score} />
					<EndStat
						label="Your Time"
						value={`${(time / 1000).toFixed(2)} seconds`}
					/>
					<EndStat label="Top Score" value={bestScore} />
				</ul>
			</Hinge>

			<button className="end-screen__button" onClick={onRetryClick}>
				Play Again?
			</button>
		</div>
	);
}

export default EndScreen;
