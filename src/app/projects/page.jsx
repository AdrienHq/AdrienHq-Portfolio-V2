"use client"

import {motion} from "framer-motion";
import Image from "next/image";
const ProjectsPage = () => {
    return (
        <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
            Projects
        </motion.div>
    );
};

export default ProjectsPage;