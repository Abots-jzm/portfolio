import { motion } from "framer-motion";
import ProjectsCarousel from "./ProjectsCarousel";
import SectionTitle from "./SectionTitle";

function Projects() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
			viewport={{ once: true }}
		>
			<SectionTitle>projects</SectionTitle>
			<ProjectsCarousel />
		</motion.section>
	);
}

export default Projects;
