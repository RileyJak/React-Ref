import { Link } from "react-router-dom";
import SpeakForm2 from "../../../challenges/state/speak-form-challenge";
import CustomIncrement from "../../../challenges/state/custom-increment";

function StateChallenges() {
	return (
		<>
			<h1>State Challenges</h1>
			<nav className="int-nav">
				<Link to="/propschallenges">Props</Link> |{" "}
				<Link to="/statechallenges">State</Link> |{" "}
				<Link to="/dependencieschallenges">Dependencies</Link> |{" "}
				<Link to="/apichallenge">API</Link> |{" "}
				<Link to="/firestorechallenge">Firestore</Link> |{" "}
				<Link to="/hookchallenge">Hooks</Link>
			</nav>
			<h2>Song Form 2</h2>
			<SpeakForm2 />
			<h2>Custom Increment</h2>
			<CustomIncrement />
		</>
	);
}

export default StateChallenges;
