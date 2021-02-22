import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav>
			<Link to="/">Home</Link> | <Link to="/quizgame">Quiz Game</Link> |{" "}
			<Link to="/demos">Demos</Link> | <Link to="/challenges">Challenges</Link>{" "}
			| <Link to="/extra-credit">Extra Credit</Link> |{" "}
			<Link to="/about">About</Link>
		</nav>
	);
}

export default Nav;
