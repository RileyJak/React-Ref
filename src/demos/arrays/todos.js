const tasks = [
	"Read a book",
	"Feed the cats",
	"Respond to emails",
	"Clean the kitchen",
];

function Todos() {
	//manually
	// const taskList = [
	// 	<li key={0}>{tasks[0]}</li>,
	// 	<li key={1}>{tasks[1]}</li>,
	// 	<li key={2}>{tasks[2]}</li>,
	// 	<li key={3}>{tasks[3]}</li>,
	// ];
	// =========================================================
	//dynamically w/ for loop
	// const taskList = [];
	// for (let i = 0; i < tasks.length; i++) {
	// 	taskList.push(<li key={i}>{tasks[i]}</li>);
	// }
	// =========================================================
	// functional methods: forEach
	// const taskList = [];
	// tasks.forEach((item, i) => {
	// 	taskList.push(<li key={i}>{item}</li>);
	// });
	// =========================================================
	// functional methods: map
	// const taskList = tasks.map((item, i) => {
	// 	return <li key={i}>{item}</li>;
	// });
	// ========================================================
	// map with implicit return
	//const taskList = tasks.map((item, i) => <li key={i}>{item}</li>);

	return (
		<>
			<p>See code for various ways to render arrays</p>
			<ul>
				{tasks.map((item, i) => (
					<li key={i}>{item}</li>
				))}
			</ul>
		</>
	);
}
export default Todos;
