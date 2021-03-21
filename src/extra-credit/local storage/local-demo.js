import React from "react";

function LocalDemo() {
	localStorage.setItem("playerName", "Riley");
	localStorage.setItem("score", 50);

	const playerName = localStorage.getItem("playerName");
	const score = localStorage.getItem("score");

	console.log(playerName);
	console.log(score);
	return <div></div>;
}

export default LocalDemo;
