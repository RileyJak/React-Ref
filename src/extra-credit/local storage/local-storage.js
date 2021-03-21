import React, { useState } from "react";
import { useLocalStorage } from "react-use";

function LocalStore() {
	const [name, setName, removeName] = useLocalStorage("name", "");
	const [score, setScore, removeScore] = useLocalStorage("score", 0);
	const [items, setItems, removeItems] = useLocalStorage("items", []);
	const [thing, setThing, removeThing] = useLocalStorage("thing", "");

	const onNameChange = (event) => {
		setName(event.target.value);
	};

	const onScoreChange = (event) => {
		setScore(Number.parseInt(event.target.value, 10));
	};
	const onAddThing = (event) => {
		setThing(event.target.value);
	};

	const onAddSwordClick = (event) => {
		setItems([...items, "sword"]);
	};
	const onAddShieldClick = (event) => {
		setItems([...items, "shield"]);
	};

	const onAddClick = (event) => {
		setItems([...items, thing]);
	};

	const onRemoveClick = (event) => {
		setItems([]);
	};

	return (
		<>
			<div>
				<label>
					Enter Name:
					<input type="text" value={name} onChange={onNameChange} />
				</label>
			</div>
			<div>
				<label>
					Enter Score:
					<input type="number" value={score} onChange={onScoreChange} />
				</label>
			</div>
			<div>
				<button onClick={onAddSwordClick}>Add Sword</button>
			</div>
			<div>
				<button onClick={onAddShieldClick}>Add Shield</button>
			</div>
			<div>
				<label>
					Enter Item:
					<input type="text" value={thing} onChange={onAddThing} />
					<button onClick={onAddClick}>Add</button>
				</label>
			</div>

			<h2>{name}'s Inventory</h2>
			<button onClick={onRemoveClick}>Empty Inventory</button>

			<ul>
				{items.map((thing, i) => (
					<li key={i}>{thing}</li>
				))}
			</ul>
		</>
	);
}

export default LocalStore;
