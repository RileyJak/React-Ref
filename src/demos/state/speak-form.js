import { useState } from "react";
import "./speak-form.css";

function SpeakForm() {
	const [message, setMessage] = useState("");
	const [rate, setRate] = useState(1);

	//================================= //
	//these do the same thing just diffrent ways of writing it
	const onMessageChange = (event) => {
		setMessage(event.target.value);
	};

	const onRateChange = (event) => {
		const newRate = parseFloat(event.target.value);
		setRate(newRate);
	};

	//const onRateChange = (e) => setRate(parseFloat(e.target.value));
	//================================= //

	const speak = () => {
		speechSynthesis.cancel();
		const utterance = new SpeechSynthesisUtterance(message);
		utterance.pitch = 1;
		utterance.rate = rate;
		speechSynthesis.speak(utterance);
	};

	return (
		<>
			<div>
				<label className="lab" htmlFor="message">
					Song
				</label>
				<input
					onChange={onMessageChange}
					id="message"
					className="input"
					type="text"
					value={message}
				/>
			</div>
			<div>
				<label className="lab" htmlFor="rate">
					Rate
				</label>
				<input
					onChange={onRateChange}
					id="rate"
					type="range"
					min="0.1"
					max="10"
					step="0.1"
					value={rate}
				></input>
			</div>
			<button onClick={speak} className="button-speak">
				Sing 🤩
			</button>
		</>
	);
}

export default SpeakForm;
