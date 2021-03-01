function Footer() {
	const year = new Date().getFullYear();
	return (
		<div className="footer">
			<p>{`© Riley Jakusik | ${year} `}</p>
		</div>
	);
}

export default Footer;
