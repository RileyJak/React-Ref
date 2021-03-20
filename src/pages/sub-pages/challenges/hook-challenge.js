import { Link } from "react-router-dom";
import DogHook from "../../../challenges/hooks/dog";

function HookChall() {
	return (
		<>
			<h1>Hook Challenge</h1>
			<nav className="int-nav">
				<Link to="/propschallenges">Props</Link> |{" "}
				<Link to="/statechallenges">State</Link> |{" "}
				<Link to="/dependencieschallenges">Dependencies</Link> |{" "}
				<Link to="/apichallenge">API</Link> |{" "}
				<Link to="/firestorechallenge">Firestore</Link> |{" "}
				<Link to="/hookchallenge">Hooks</Link>
			</nav>
			<DogHook />
		</>
	);
}

export default HookChall;
