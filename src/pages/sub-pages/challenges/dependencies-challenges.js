import { Link } from "react-router-dom";
import Confetti2 from "../../../challenges/dependencies/confetti2";
import DataViz from "../../../challenges/dependencies/data-viz";

function DependChallenge() {
	return (
		<>
			<h1>Dependencies Challenges</h1>
			<nav className="int-nav">
				<Link to="/propschallenges">Props</Link> |{" "}
				<Link to="/statechallenges">State</Link> |{" "}
				<Link to="/dependencieschallenges">Dependencies</Link> |{" "}
				<Link to="/apichallenge">API</Link> |{" "}
				<Link to="/firestorechallenge">Firestore</Link>
			</nav>

			<Confetti2 />
			<DataViz />
		</>
	);
}

export default DependChallenge;
