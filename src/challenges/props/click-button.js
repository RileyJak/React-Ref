import React, { useState } from "react";
import "./social-post.css";

function ClickButton({ type }) {
	const [clickCount, setClickCount] = useState(0);

	const incrementCount = () => setClickCount(clickCount + 1);

	return (
		<button class="button" onClick={incrementCount}>
			{type}
			{clickCount}
		</button>
	);
}

export default ClickButton;
