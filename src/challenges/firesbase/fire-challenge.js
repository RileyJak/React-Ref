import React from "react";
import { db } from "../../data/firebase.js";

function FireChallenge() {
	async function readAllUsers() {
		try {
			const snapshot = await db.collection("users").get();

			console.log(`Found ${snapshot.size}x user(s)`);
			const docs = snapshot.docs;

			const { firstName, lastName, highScore } = docs;

			// loop over array to print out id and data
			docs.forEach((docSnapshot) => {
				console.log(
					`User with ID: ${docSnapshot.id}
					--------
					Name: ${firstName}  ${lastName}
					High Score: ${highScore}`
				);
			});
		} catch (err) {
			console.error(err);
		}
	}
	readAllUsers();

	return <></>;
}

export default FireChallenge;
