import { Link } from "react-router-dom";
import MusicalButton from "../../../demos/dependencies/musical-button";
import ThrowConfetti from "../../../demos/dependencies/confetti";

function DependDemo() {
	return (
		<>
			<h1>Dependencies Demo</h1>
			<nav className="int-nav">
				<Link to="/propsdemo">Props</Link> | <Link to="/statedemo">State</Link>{" "}
				| <Link to="/dependenciesdemo">Dependencies</Link>
			</nav>

			<h2>Tone JS Music</h2>
			<MusicalButton>Play Some Beats 🎧</MusicalButton>
			<h2>Confetti</h2>
			<ThrowConfetti />
		</>
	);
}

export default DependDemo;
