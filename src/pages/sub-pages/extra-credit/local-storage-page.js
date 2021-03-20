import React from "react";
import { Link } from "react-router-dom";

function LocalStorage() {
	return (
		<>
			<h1>Local Storage</h1>
			<nav className="int-nav">
				<Link to="/dataviz">Data Viz</Link> |{" "}
				<Link to="/localstorage">Local Storage</Link> |{" "}
				<Link to="/animations">Animations</Link>
			</nav>
		</>
	);
}

export default LocalStorage;
