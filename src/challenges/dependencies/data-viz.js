import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
} from "recharts";

function DataViz() {
	const data = [
		{ name: "Monday", temp: 23 },
		{ name: "Tuesday", temp: 20 },
		{ name: "Wednesday", temp: 18 },
		{ name: "Thursday", temp: 24 },
		{ name: "Friday", temp: 32 },
	];

	return (
		<>
			<LineChart
				width={600}
				height={300}
				data={data}
				margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
			>
				<Line
					type="monotone"
					dataKey="temp"
					stroke="rgb(48, 110, 134)"
					strokeWidth={2}
				/>
				<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
			</LineChart>
		</>
	);
}

export default DataViz;
