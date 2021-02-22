import "./welcome-message.css";
function Welcome(props) {
	const { name, greeting } = props;
	return (
		<h2 className="welcome-message">
			{greeting} {name}!
		</h2>
	);
}

export default Welcome;
