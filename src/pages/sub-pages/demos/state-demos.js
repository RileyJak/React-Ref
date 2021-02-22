import { Link } from "react-router-dom";
import ButtonClick from "../../../demos/state/button-click";
import SpeakForm from "../../../demos/state/speak-form";

function StateDemo() {
	return (
		<>
			<h1>State Demo</h1>
			<nav className="int-nav">
				<Link to="/propsdemo">Props</Link> | <Link to="/statedemo">State</Link>{" "}
				| <Link to="/dependenciesdemo">Dependencies</Link>
			</nav>

			<h2>Stateful Buttons</h2>
			<ButtonClick />
			<h2>Song Form</h2>
			<SpeakForm />
		</>
	);
}

export default StateDemo;
