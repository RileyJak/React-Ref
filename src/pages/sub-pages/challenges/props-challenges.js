import { Link } from "react-router-dom";
import AlertButton from "../../../challenges/props/alert-button";
import SocialPost from "../../../challenges/props/social-post";

function PropChallenges() {
	return (
		<>
			<h1>Props Challenges</h1>
			<nav className="int-nav">
				<Link to="/propschallenges">Props</Link> |{" "}
				<Link to="/statechallenges">State</Link> |{" "}
				<Link to="/dependencieschallenges">Dependencies</Link>
			</nav>

			<h2>Alert Buttons</h2>
			<AlertButton
				buttonText="❄ Snow Warning ❄ "
				alertMessage="We are getting another 8 to 13 inches tonight (02/15/2021)"
			/>
			<AlertButton alertMessage="I have 99 problems and playing with my cat will solve 97 of them" />
			<h2>Social Media</h2>
			<SocialPost
				userName="R__Jak"
				content="This cold weather makes me want to get a job somewhere warm"
			/>
			<SocialPost
				userName="Maisel_The_Cat"
				content="I really wish someone would feed me treats and scratch my tummy"
			/>
		</>
	);
}

export default PropChallenges;
