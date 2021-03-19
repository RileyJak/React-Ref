import React from "react";
import { db } from "../../data/firebase.js";

function Fire() {
	async function readAllUsers() {
		try {
			// === LONG WAY ===
			// const collectionRef = db.collection("users"); // this will allow me to do console.log(db)
			// const getPromise = collectionRef.get(); // this is where I get the error "FirebaseError: Missing or insufficent permissions" happens in index.js as well
			// const snapshot = await getPromise;

			// === SHORT WAY ===
			//const snapshot = await db.collection("users").get();

			// === SORTING ===
			const snapshot = await db
				.collection("users")
				.where("isOnline", "==", true)
				.get();

			console.log(`Found ${snapshot.size}x user(s)`);
			const docs = snapshot.docs;

			// loop over array to print out id and data
			docs.forEach((docSnapshot) => {
				console.log(docSnapshot.id, docSnapshot.data());
			});
		} catch (err) {
			console.error(err);
		}
	}
	readAllUsers();

	return <></>;
}

export default Fire;
