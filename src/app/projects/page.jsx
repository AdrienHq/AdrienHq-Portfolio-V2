"use client"

import {motion} from "framer-motion";
import Image from "next/image";
const ProjectsPage = () => {
    return (
        <motion.div className="h-full" initial={{y: "-200vh"}} animate={{y: "0%"}} transition={{duration: 1}}>
            <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                <div className="h-1/2 lg:h-5/6 lg:w-1/2 flex flex-col gap-8 justify-center ">
                    <h1 className="text-2xl font-bold">My projects</h1>
                    <p className="md:text-xl pb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
                        beatae error odit quisquam, temporibus voluptates.test</p>
                    <motion.svg
                        initial={{opacity: 0.2, y: 0}}
                        animate={{opacity: 1, y: "10px"}}
                        transition={{repeat: Infinity, duration: 3, ease: "easeInOut"}}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                    >
                        <path
                            d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                        <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                        <path
                            d="M15 11L12 14L9 11"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                    </motion.svg>
                </div>
                <div className="h-1/2 lg:h-full lg:w-1/2 relative">
                    <Image src="/codeNoBg.svg" alt="" fill className="object-contain"/>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectsPage;