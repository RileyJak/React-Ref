import BeachImage from "../assets/images/evan-middleton-OptHIXKHuSQ-unsplash.jpg";
import OceanSounds from "../assets/sounds/ES_Amb Ocean 1 - SFX Producer.mp3";
import "../about/about.css";

function AboutPage() {
	return (
		<div className="holder">
			<h1>About Me</h1>

			<h2>Riley Jakusik</h2>

			<p>
				We are learning HTML <em>together</em>.
			</p>

			<p>Some things I have been doing lately</p>
			<ul className="emoji-list">
				<li>Reading A LOT</li>
				<li>Playing Stardew</li>
				<li>Working my Internship</li>
			</ul>

			<p>Some languages I will be using</p>
			<ul className="emoji-list">
				<li>HTML</li>
				<li>CSS</li>
				<li>JavaScript</li>
				<li>Typescript</li>
				<li>React</li>
			</ul>

			<p>
				An app I use daily is
				<a
					href="https://www.notion.so/"
					target="_blank"
					rel="noreferrer"
					title="App recommendation"
				>
					Notion
				</a>
			</p>

			<img
				id="img-beach"
				src={BeachImage}
				alt="a cool pic from my home town"
				width="600"
			/>
			<audio controls>
				<source src={OceanSounds} type="audio/mpeg" />
			</audio>
			<div id="quote-back">
				<blockquote cite="http://www.planetofsuccess.com/blog/2019/ocean-quotes/">
					She loves the serene brutality of the ocean, loves the elctric power
					she felt with each breath of wet briny air
				</blockquote>
			</div>
		</div>
	);
}

export default AboutPage;
