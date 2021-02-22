import ClickButton from "./click-button";
import "./social-post.css";

function SocialPost({ userName, content }) {
	return (
		<div className="post-container">
			<span className="post-container__content"> {content}</span>
			<span className="post-container__name">-{userName}</span>
			<div className="button-container">
				<ClickButton type="💗" />
				<ClickButton type="🐸" />
				<ClickButton type="🐱‍🚀" />
			</div>
		</div>
	);
}

export default SocialPost;
