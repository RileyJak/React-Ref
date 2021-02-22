import "./alert-button.css";
function AlertButton({ buttonText = "🚨 ALERT 🚨", alertMessage }) {
	function alertTrigger() {
		alert(alertMessage);
	}

	return (
		<button className="alert-button" onClick={alertTrigger}>
			{buttonText}
		</button>
	);
}

export default AlertButton;
