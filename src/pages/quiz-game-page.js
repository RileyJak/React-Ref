import Game from "../game/game";
import LoadingSpinner from "../common/loading-spinner";
import ErrorMessage from "../common/error-message";
import useGetTriviaData from "../game/hooks/use-get-trivia-data";

function QuizGamePage() {
	const [isLoading, errorMessage, data] = useGetTriviaData(5, "hard");
	let contents;
	if (isLoading) contents = <LoadingSpinner />;
	else if (errorMessage !== "")
		contents = <ErrorMessage>Something Went Wrong</ErrorMessage>;
	else contents = <Game triviaData={data} />;

	return <>{contents}</>;
}

export default QuizGamePage;
