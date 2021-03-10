import { Link } from "react-router-dom";

function APIdemo() {
	return (
		<>
			<h1>API Demo</h1>
			<nav className="int-nav">
				<Link to="/propsdemo">Props</Link> | <Link to="/statedemo">State</Link>{" "}
				| <Link to="/dependenciesdemo">Dependencies</Link> |{" "}
				<Link to="/arrayrenderingdemo">Array Rendering</Link> |{" "}
				<Link to="/apidemo">API</Link>
			</nav>
			<h3>See code in demo folder: done in plain HTML/CSS/JS</h3>
		</>
	);
}

export default APIdemo;
