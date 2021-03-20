import { motion } from "framer-motion";
/**
 * Wraps the children in an animated div that spins
 * @param {object} props
 * @param {React.ReactNode} props.children
 */

function Spin({ children }) {
	return (
		<motion.div
			className="end-screen__trophy"
			initial={{ rotate: 0, origin: 0.5 }}
			animate={{ rotate: 360 }}
			transition={{ type: "spring", damping: 10, stiffness: 100 }}
		>
			{children}
		</motion.div>
	);
}

export { Spin };
