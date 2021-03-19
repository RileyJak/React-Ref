import { Link } from "react-router-dom";
import Welcome from "../../../demos/props/welcome-message";
import SpeakButton from "../../../demos/props/speak-button";
import ChatMessage from "../../../demos/props/chat-message";

function PropsDemo() {
	return (
		<>
			<h1>Props Demo</h1>
			<nav className="int-nav">
				<Link to="/propsdemo">Props</Link> | <Link to="/statedemo">State</Link>{" "}
				| <Link to="/dependenciesdemo">Dependencies</Link> |{" "}
				<Link to="/arrayrenderingdemo">Array Rendering</Link> |{" "}
				<Link to="/apidemo">API</Link> |{" "}
				<Link to="/firestoredemo">Firestore</Link>
			</nav>
			<Welcome name={"Partner"} greeting={"Howdy"} />
			<h2>Singing Buttons</h2>
			<SpeakButton message="Fruit Salad" rate={3} pitch={3} />
			<SpeakButton message="Yummy" rate={5} pitch={4} />
			<SpeakButton message="Yummy" rate={7} pitch={5} />
			<h2>Chat</h2>
			<ChatMessage message="I ❤ React" userName="R__Jak" date="02/15/2021" />
			<ChatMessage
				message="Girl you crazy code suckz"
				userName="Maisel_The_Cat"
				date="02/16/2021"
			/>
			<ChatMessage
				message="Why you gotta be so rude"
				userName="R__Jak"
				date="02/17/2021"
			/>
			<ChatMessage
				message="FEED ME ☠"
				userName="Maisel_The_Cat"
				date="02/20/2021"
			/>
		</>
	);
}

export default PropsDemo;
