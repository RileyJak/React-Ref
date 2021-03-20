import { Link } from "react-router-dom";
import Dog from "../../../challenges/api/dog-challenge";

function APIchallenge() {
	return (
		<>
			<h1>API Challenge</h1>
			<nav className="int-nav">
				<Link to="/propschallenges">Props</Link> |{" "}
				<Link to="/statechallenges">State</Link> |{" "}
				<Link to="/dependencieschallenges">Dependencies</Link> |{" "}
				<Link to="/apichallenge">API</Link> |{" "}
				<Link to="/firestorechallenge">Firestore</Link> |{" "}
				<Link to="/hookchallenge">Hooks</Link>
			</nav>
			<h3>Challenge done in plain HTML/CSS/JS:</h3>
			<p> See code: src/challenge/api/fetch-challenge.js</p>
			<p>Run code: src/demos/api/index.html and run live server </p>

			<h3>Challenge done in React</h3>
			<Dog />
		</>
	);
}

export default APIchallenge;
