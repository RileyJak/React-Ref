import { useState } from "react";
import "./custom-increment.css";

function CustomIncrement() {
	const [inc, setInc] = useState(1);
	const onIncChange = (event) => {
		const newInc = parseFloat(event.target.value);
		setInc(newInc);
	};

	const [num, setNum] = useState(0);
	const onButtonTap = () => {
		setNum(num + inc);
	};

	const onResetClick = () => {
		setNum(0);
		setInc(1);
	};

	const content = inc > 0 ? `Add ${inc}` : `Subtract ${Math.abs(inc)}`;

	return (
		<>
			<h3>The current value is: {num}</h3>
			<h3>The current increment is: {inc}</h3>
			<div>
				<label className="l" htmlFor="inc">
					Increment
				</label>
				<input
					onChange={onIncChange}
					className="i"
					id="inc"
					type="range"
					min="-100"
					max="100"
					step="1"
					value={inc}
				></input>
			</div>
			<button className="b" onClick={onButtonTap}>
				{content}
			</button>

			<button className="b" onClick={onResetClick}>
				Reset
			</button>
		</>
	);
}

export default CustomIncrement;
