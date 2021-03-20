import { Link } from "react-router-dom";
import Todos from "../../../demos/arrays/todos";

function ArrayDemo() {
	return (
		<>
			<h1>Array Rendering Demo</h1>
			<nav className="int-nav">
				<Link to="/propsdemo">Props</Link> | <Link to="/statedemo">State</Link>{" "}
				| <Link to="/dependenciesdemo">Dependencies</Link> |{" "}
				<Link to="/arrayrenderingdemo">Array Rendering</Link> |{" "}
				<Link to="/apidemo">API</Link> |{" "}
				<Link to="/firestoredemo">Firestore</Link> |{" "}
			</nav>
			<Todos />
		</>
	);
}

export default ArrayDemo;
