import React, { useEffect, useState } from "react";

function useGetDog(amount = 2) {
	const [dogFetch, setDogFetch] = useState({
		isLoading: true,
		errorMessage: "",
		data: null,
	});

	useEffect(() => {
		async function getDog() {
			try {
				const url = `https://dog.ceo/api/breeds/image/random/${amount}`;
				const response = await fetch(url);

				if (!response.ok) {
					throw new Error(
						`Something went wrong server responded with ${response.status}`
					);
				}

				const json = await response.json();
				const { message } = json;

				setDogFetch({
					isLoading: false,
					errorMessage: "",
					data: message,
				});
			} catch (err) {
				setDogFetch({
					isLoading: false,
					errorMessage: "Something Went Wrong! Try Again Later",
					data: null,
				});
				console.error(err);
			}
		}

		getDog();
	}, [amount]);

	const { isLoading, errorMessage, data } = dogFetch;
	return [isLoading, errorMessage, data, amount];
}

export default useGetDog;
