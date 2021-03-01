import he from "he";

let triviaData = [
	{
		category: "Entertainment: Cartoon & Animations",
		type: "multiple",
		difficulty: "easy",
		question: "Who was the villain of &#039;&#039;The Lion King&#039;&#039;?",
		correct_answer: "Scar",
		incorrect_answers: ["Fred", "Jafar", "Vada"],
	},
	{
		category: "Entertainment: Cartoon & Animations",
		type: "multiple",
		difficulty: "easy",
		question: "In South Park, what is Stan&#039;s surname?",
		correct_answer: "Marsh",
		incorrect_answers: ["Stotch", "Broflovski", "Tweak"],
	},
	{
		category: "Entertainment: Cartoon & Animations",
		type: "multiple",
		difficulty: "easy",
		question:
			"In &quot;Avatar: The Last Airbender&quot;, which element does Aang begin to learn after being defrosted?",
		correct_answer: "Water",
		incorrect_answers: ["Air", "Earth", "Fire"],
	},
	{
		category: "Entertainment: Cartoon & Animations",
		type: "multiple",
		difficulty: "medium",
		question:
			"Which of these is not a real character in the cartoon series My Little Pony: Friendship is Magic?",
		correct_answer: "Rose Marene",
		incorrect_answers: ["Pinkie Pie", "Maud Pie", "Rainbow Dash"],
	},
	{
		category: "Entertainment: Cartoon & Animations",
		type: "multiple",
		difficulty: "hard",
		question:
			"Who voice acted the character Hiccup in the movie &quot;How to Train Your Dragon&quot;?",
		correct_answer: "Jay Baruchel",
		incorrect_answers: ["Jack Brauchel", "John Powell", "Gerard Butler"],
	},
	{
		category: "Entertainment: Cartoon & Animations",
		type: "multiple",
		difficulty: "easy",
		question:
			"Who created the Cartoon Network series &quot;Adventure Time&quot;?",
		correct_answer: "Pendleton Ward",
		incorrect_answers: ["J. G. Quintel", "Ben Bocquelet", "Rebecca Sugar"],
	},
	{
		category: "Entertainment: Cartoon & Animations",
		type: "multiple",
		difficulty: "hard",
		question:
			"In &quot;Gravity Falls&quot;, the character Bill Cipher remarks that &quot;the universe is what?&quot;",
		correct_answer: "A hologram ",
		incorrect_answers: ["An illusion ", "A simulation", "Corrupting"],
	},
	{
		category: "Entertainment: Cartoon & Animations",
		type: "multiple",
		difficulty: "medium",
		question:
			"In &quot;The Simpsons&quot;, where did Homer and Marge first meet?",
		correct_answer: "At Summer Camp",
		incorrect_answers: [
			"At High School",
			"At Church",
			"At 742 Evergreen Terrace",
		],
	},
	{
		category: "Entertainment: Cartoon & Animations",
		type: "multiple",
		difficulty: "hard",
		question:
			"In &quot;Gravity Falls&quot;, how much does Waddles weigh when Mable wins him in &quot;The Time Traveler&#039;s Pig&quot;?",
		correct_answer: "15 pounds",
		incorrect_answers: ["20 pounds", "10 pounds", "30 pounds"],
	},
	{
		category: "Entertainment: Cartoon & Animations",
		type: "multiple",
		difficulty: "easy",
		question:
			"Which of these characters live in a pineapple under the sea in the cartoon &quot;SpongeBob SquarePants&quot;.",
		correct_answer: "SpongeBob SquarePants ",
		incorrect_answers: ["Patrick Star", "Squidward Tentacles", "Mr. Krabs"],
	},
	{
		category: "Entertainment: Cartoon & Animations",
		type: "multiple",
		difficulty: "medium",
		question: "Which Sanrio character was introduced in 1996?",
		correct_answer: "Pompompurin",
		incorrect_answers: ["My Melody", "Badtz-Maru", "Kerropi"],
	},
	{
		category: "Entertainment: Cartoon & Animations",
		type: "multiple",
		difficulty: "medium",
		question:
			"What was the number on Gerald&#039;s shirt in &quot;Hey Arnold!&quot;?",
		correct_answer: "33",
		incorrect_answers: ["88", "38", "83"],
	},
	{
		category: "Entertainment: Cartoon & Animations",
		type: "multiple",
		difficulty: "medium",
		question:
			"In the show &quot;Fat Albert and the Cosby Kids&quot;, what is the name of the characters&#039; fictional gang?",
		correct_answer: "The Junkyard Gang",
		incorrect_answers: [
			"The Trash Troupe",
			"The Scrapyard Seven",
			"The Rotten Posse",
		],
	},
	{
		category: "Entertainment: Cartoon & Animations",
		type: "multiple",
		difficulty: "medium",
		question:
			"What ability does Princess Sofia the First have from her amulet that allows her to breathe underwater?",
		correct_answer: "Mermaid Transformation",
		incorrect_answers: ["Artificial Gills", "Bubble Head", "Bubble Shield"],
	},
	{
		category: "Entertainment: Cartoon & Animations",
		type: "multiple",
		difficulty: "hard",
		question:
			"What was Maggie Simpson&#039;s first canonical word, not including the Tracey Ullman shorts?",
		correct_answer: "Daddy.",
		incorrect_answers: ["Sequel?", "Ja!", "Rusty!"],
	},
];

triviaData = triviaData.map((item) => {
	return {
		...item,
		question: he.decode(item.question),
		correct_answer: he.decode(item.correct_answer),
		incorrect_answers: item.incorrect_answers.map((incorrect) =>
			he.decode(incorrect)
		),
	};
});
export default triviaData;
