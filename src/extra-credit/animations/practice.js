import React from "react";
import { motion } from "framer-motion";

function AnimationPractice() {
	return (
		<>
			<motion.div animate={{ x: 100, y: 10 }}>This is moving XY</motion.div>
			<motion.div
				animate={{ scale: 0.5 }}
				transition={{ duration: 1, repeat: 2, repeatType: "reverse" }}
			>
				Scaling
			</motion.div>

			<motion.div
				initial={{ rotate: 180, originX: 0, originY: 0 }}
				animate={{ rotate: 0 }}
				transition={{ type: "spring", damping: 10, stiffness: 100 }}
			>
				Rotates
			</motion.div>
			<div>
				<motion.span
					initial={{ color: "rgb(0,0, 255)" }}
					animate={{ color: "rgb(0,255,0)" }}
					transition={{ repeat: Infinity, repeatType: "reverse" }}
				>
					Fancy
				</motion.span>
			</div>
		</>
	);
}

export default AnimationPractice;
