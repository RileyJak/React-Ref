function promiseHandler(resolve, reject) {
	setTimeout(() => {
		resolve("hey that was successful");
		reject("Failure");
	}, 3000);
}

// === VERBOSE WAY ===

//console.log("The promise is starting");
// const promise = new Promise(promiseHandler);

// // then is used for after the promise has been fulfilled

// promise.then((message) => {
// 	console.log("Promise has resolved with:", message);
// });

// // catch is used for after the promise has been rejected

// promise.catch((err) => {
// 	console.log("Promise hit an error:", err);
// });

// //finally is used for after promise has settled regardless of fulfilled or rejected

// promise.finally(() => {
// 	console.log("Promise is done (rejected or fulfilled)");
// });

// === CHAINING ===

new Promise(promiseHandler)
	.then((message) => console.log("Promise has resolved with:", message))

	.catch((err) => console.log("Promise hit an error:", err))

	.finally(() => console.log("Promise is done (rejected or fulfilled)"));

//creates a promise after a delay
function wait(ms) {
	return new Promise((resolve, reject) => {
		if (ms < 0) {
			reject(`Invalid wait time ${ms}`);
		} else {
			const startTime = performance.now();
			setTimeout(() => {
				const elapsedTime = performance.now() - startTime;
				resolve(elapsedTime);
			}, ms);
		}
	});
}

wait(1000)
	.then((elapsedTime) =>
		console.log(`Timer 1 is done! It took ${elapsedTime}ms`)
	)
	.then(() => {
		return wait(-500); // causes an error
	})
	.then((elapsedTime) =>
		console.log(`Timer 2 is done! It took ${elapsedTime}ms`)
	)
	.then(() => wait(1500))
	.then((elapsedTime) =>
		console.log(`Timer 3 is done! It took ${elapsedTime}ms`)
	)
	.catch((err) => console.log(`An error occurred: ${err}`))
	.finally(() => console.log("All timing is done"));
