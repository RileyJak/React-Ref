import React from "react";
import { Link } from "react-router-dom";
import Viz from "../../../extra-credit/data-viz/data-viz";

function DataViz() {
	const data = [
		{ value: 40, color: "#710088", label: "Monday" },
		{ value: 26, color: "#4d0057", label: "Tuesday" },
		{ value: 30, color: "#710080", label: "Wednesday" },
		{ value: 50, color: "#4d0057", label: "Thursday" },
		{ value: 45, color: "#810088", label: "Friday" },
	];

	const header = "Daily Temp";
	return (
		<>
			<h1>Data Viz</h1>
			<nav className="int-nav">
				<Link to="/dataviz">Data Viz</Link> |{" "}
				<Link to="/localstorage">Local Storage</Link> |{" "}
				<Link to="/animations">Animations</Link>
			</nav>
			<Viz data={data} header={header} scale={5} />
		</>
	);
}

export default DataViz;
