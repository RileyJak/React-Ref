import { motion } from "framer-motion";
/**
 * Wraps the children in an animated div that spins
 * @param {object} props
 * @param {React.ReactNode} props.children
 */

function Hinge({ children }) {
	return (
		<motion.div
			initial={{ rotate: 180, originX: 0, originY: 0 }}
			animate={{ rotate: 0 }}
			transition={{ type: "spring", damping: 10, stiffness: 100 }}
		>
			{children}
		</motion.div>
	);
}

export { Hinge };
