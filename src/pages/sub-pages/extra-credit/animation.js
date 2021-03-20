import React from "react";
import { Link } from "react-router-dom";
import AnimationPractice from "../../../extra-credit/animations/practice";

function Animations() {
	return (
		<>
			<h1>Animations</h1>
			<nav className="int-nav">
				<Link to="/dataviz">Data Viz</Link> |{" "}
				<Link to="/localstorage">Local Storage</Link> |{" "}
				<Link to="/animations">Animations</Link>
			</nav>

			<h2>Animations were added to the quiz game as well</h2>
			<AnimationPractice />
		</>
	);
}

export default Animations;
