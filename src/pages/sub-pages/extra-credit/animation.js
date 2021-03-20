import React from "react";
import { Link } from "react-router-dom";

function Animations() {
	return (
		<>
			<h1>Animations</h1>
			<nav className="int-nav">
				<Link to="/dataviz">Data Viz</Link> |{" "}
				<Link to="/localstorage">Local Storage</Link> |{" "}
				<Link to="/animations">Animations</Link>
			</nav>

			<h2>Animations were added to the quiz game</h2>
		</>
	);
}

export default Animations;
