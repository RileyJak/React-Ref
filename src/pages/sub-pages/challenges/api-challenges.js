import { Link } from "react-router-dom";

function APIchallenge() {
	return (
		<>
			<h1>API Challenge</h1>
			<nav className="int-nav">
				<Link to="/propschallenges">Props</Link> |{" "}
				<Link to="/statechallenges">State</Link> |{" "}
				<Link to="/dependencieschallenges">Dependencies</Link> |{" "}
				<Link to="/apichallenge">API</Link>
			</nav>
			<h3>See code in challenges folder: done in plain HTML/CSS/JS</h3>
		</>
	);
}

export default APIchallenge;
