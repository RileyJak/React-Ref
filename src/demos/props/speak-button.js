import "./speak-button.css";
function SpeakButton({
	message = "I do not know what to say",
	pitch = 1,
	rate = 1,
}) {
	const speak = () => {
		speechSynthesis.cancel();
		const utterance = new SpeechSynthesisUtterance(message);
		utterance.pitch = pitch;
		utterance.rate = rate;
		speechSynthesis.speak(utterance);
	};

	return (
		<button className="speak-button" onClick={speak}>
			Sing 🔉{" "}
		</button>
	);
}

export default SpeakButton;
