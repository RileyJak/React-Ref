import React from "react";
import { Link } from "react-router-dom";
import Fire from "../../../demos/firestore/fire";

function FireStoreDemo() {
	return (
		<>
			<h1>Firestore Demo</h1>
			<nav className="int-nav">
				<nav className="int-nav">
					<Link to="/propsdemo">Props</Link> |{" "}
					<Link to="/statedemo">State</Link> |{" "}
					<Link to="/dependenciesdemo">Dependencies</Link> |{" "}
					<Link to="/arrayrenderingdemo">Array Rendering</Link> |{" "}
					<Link to="/apidemo">API</Link> |{" "}
					<Link to="/firestoredemo">Firestore</Link> |{" "}
				</nav>
			</nav>
			<h3>look in the console 👀 </h3>

			<Fire />
		</>
	);
}
export default FireStoreDemo;
