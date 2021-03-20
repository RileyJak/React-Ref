import React from "react";

function Viz({ data, header, scale }) {
	return (
		<>
			<h2>{header}</h2>
			{data.map((item) => {
				const x = item.value;
				const y = item.color;
				const z = item.label;
				return (
					<>
						<div
							style={{
								width: `${x * scale}px`,
								backgroundColor: `${y}`,
								color: "#FFFFFF",
							}}
						>
							{z}
						</div>
					</>
				);
			})}
		</>
	);
}

export default Viz;
