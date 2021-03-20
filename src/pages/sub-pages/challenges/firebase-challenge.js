import { Link } from "react-router-dom";
import FireChallenge from "../../../challenges/firesbase/fire-challenge";

function FireStore() {
	return (
		<>
			<h1>Firestore Challenge</h1>
			<nav className="int-nav">
				<Link to="/propschallenges">Props</Link> |{" "}
				<Link to="/statechallenges">State</Link> |{" "}
				<Link to="/dependencieschallenges">Dependencies</Link> |{" "}
				<Link to="/apichallenge">API</Link> |{" "}
				<Link to="/firestorechallenge">Firestore</Link> |{" "}
				<Link to="/hookchallenge">Hooks</Link>
			</nav>

			<FireChallenge />
			<h3>look in the console 👀 </h3>
		</>
	);
}

export default FireStore;
