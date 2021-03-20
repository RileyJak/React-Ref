import { AnimatePresence, motion } from "framer-motion";
import React from "react";

/**
 * Wraps around a FadeTransiton. If you want enter AND exit transitions, be sure that you put your FadeTransiton make sure you put your transiton inside the wrapper
 * @param {object} props
 * @param {React.ReactNode} props.children
 */

function FadeWrapper({ children }) {
	return <AnimatePresence exitBeforeEnter={true}>{children}</AnimatePresence>;
}

/**
 * Wraps the children in an animated div that fades in and out
 * @param {object} props
 * @param {React.ReactNode} props.children
 */

function FadeTransiton({ children }) {
	return (
		<motion.div
			initial={{ opacity: 0, x: -75, transition: { ease: "easeOut" } }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 75, transition: { ease: "easeIn" } }}
			transition={{ duration: 0.25 }}
		>
			{children}
		</motion.div>
	);
}

export { FadeTransiton, FadeWrapper };
