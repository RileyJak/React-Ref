import { Link } from "react-router-dom";

function APIdemo() {
	return (
		<>
			<h1>API Demo</h1>
			<nav className="int-nav">
				<Link to="/propsdemo">Props</Link> | <Link to="/statedemo">State</Link>{" "}
				| <Link to="/dependenciesdemo">Dependencies</Link> |{" "}
				<Link to="/arrayrenderingdemo">Array Rendering</Link> |{" "}
				<Link to="/apidemo">API</Link> |{" "}
				<Link to="/firestoredemo">Firestore</Link> |{" "}
			</nav>
			<h3>Demo done in plain HTML/CSS/JS:</h3>
			<p> See code: src/demos/api/</p>
			<p>Run code: src/demos/api/index.html and run live server </p>
		</>
	);
}

export default APIdemo;
