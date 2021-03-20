import { BrowserRouter, Switch, Route } from "react-router-dom";
import DemoPage from "./pages/demos-page";
import ChallengesPage from "./pages/challenges-page";
import ExtraCreditPage from "./pages/extra-credit-page";
import AboutPage from "./pages/about-page";
import HomePage from "./pages/home-page";
import QuizGamePage from "./pages/quiz-game-page";
import PropsDemo from "./pages/sub-pages/demos/props-demo";
import StateDemo from "./pages/sub-pages/demos/state-demos";
import DependDemo from "./pages/sub-pages/demos/dependencies-demo";
import PropChallenges from "./pages/sub-pages/challenges/props-challenges";
import StateChallenges from "./pages/sub-pages/challenges/state-challenges";
import DependChallenge from "./pages/sub-pages/challenges/dependencies-challenges";
import Nav from "./common/nav";
import Footer from "./common/footer";
import ArrayDemo from "./pages/sub-pages/demos/array-demo";
import APIdemo from "./pages/sub-pages/demos/api-demo";
import APIchallenge from "./pages/sub-pages/challenges/api-challenges";
import FireStoreDemo from "./pages/sub-pages/demos/firestore-demo";
import FireStore from "./pages/sub-pages/challenges/firebase-challenge";
import HookChall from "./pages/sub-pages/challenges/hook-challenge";

function App() {
	return (
		<>
			<BrowserRouter>
				<Nav />
				<Switch>
					{/* Main Pages */}
					<Route path="/" exact>
						<HomePage />
					</Route>
					<Route path="/quizgame">
						<QuizGamePage />
					</Route>

					<Route path="/demos">
						<DemoPage />
					</Route>
					<Route path="/challenges">
						<ChallengesPage />
					</Route>
					<Route path="/extra-credit">
						<ExtraCreditPage />
					</Route>
					<Route path="/about">
						<AboutPage />
					</Route>

					{/* Internal Pages */}

					{/* Demo internal */}
					<Route path="/propsdemo">
						<PropsDemo />
					</Route>
					<Route path="/statedemo">
						<StateDemo />
					</Route>
					<Route path="/dependenciesdemo">
						<DependDemo />
					</Route>
					<Route path="/arrayrenderingdemo">
						<ArrayDemo />
					</Route>
					<Route path="/apidemo">
						<APIdemo />
					</Route>
					<Route path="/firestoredemo">
						<FireStoreDemo />
					</Route>

					{/* Challenges internal */}
					<Route path="/propschallenges">
						<PropChallenges />
					</Route>
					<Route path="/statechallenges">
						<StateChallenges />
					</Route>
					<Route path="/dependencieschallenges">
						<DependChallenge />
					</Route>
					<Route path="/apichallenge">
						<APIchallenge />
					</Route>
					<Route path="/firestorechallenge">
						<FireStore />
					</Route>
					<Route path="/hookchallenge">
						<HookChall />
					</Route>
					{/* Extra Credit internal */}
				</Switch>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
