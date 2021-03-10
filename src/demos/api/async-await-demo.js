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

async function main() {
	console.log("Timers are starting");

	try {
		const promise = wait(2000);
		const elapsedTime1 = await promise;
		console.log(`Timer 1 is done: ${elapsedTime1}`);

		const elapsedTime2 = await wait(-3500);
		console.log(`Timer 2 is done: ${elapsedTime2}`);

		const elapsedTime3 = await wait(5000);
		console.log(`Timer 3 is done: ${elapsedTime3}`);
	} catch (err) {
		console.log(`Error: ${err}`);
	}

	console.log("All timers are done");
}

main();
