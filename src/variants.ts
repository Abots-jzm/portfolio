import { Variants } from "framer-motion";

export const nameVariants: Variants = {
	hidden: {
		opacity: 1,
	},
	visible: {
		opacity: 1,
		transition: {
			delay: 0.5,
			staggerChildren: 0.08,
		},
	},
};

export const letterVariants: Variants = {
	hidden: { opacity: 0, scale: 0 },
	visible: { opacity: 1, scale: 1 },
};
