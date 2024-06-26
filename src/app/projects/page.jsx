"use client";

import {motion, useScroll, useTransform} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {useRef} from "react";

const items = [
    {
        id: 1,
        color: "from-violet-300 to-purple-300",
        title: "ADHD Kitchen - Symfony",
        desc: "This is my cooking website. I use it to store my favorite recipes, but mostly to experiment with new features in development languages.",
        img: "/adhdkitchen.png",
        link: ["https://github.com/AdrienHq/symfony-kitchen"],
        linkText: ["Github"],
        linkTech: ["Php", "Symfony", "Api Platform", "RESTApi", "Doctrine", "Twig", "React", "HTML", "CSS", "JavaScript", "MySql", "Apache"],
    },
    {
        id: 2,
        color: "from-blue-300 to-violet-300",
        title: "Blog - React",
        desc: "This is my blog where I talk about nothing & everything. It was mostly aimed for me to learn how to use react",
        img: "/blog.png",
        link: ["https://github.com/AdrienHq/react-blog"],
        linkText: ["Github"],
        linkTech: ["React", "NextJS", "Prisma", "Tailwind CSS"],
    },
    {
        id: 3,
        color: "from-red-300 to-blue-300",
        title: "Portfolio V1 & V2",
        desc: "Discover my journey in front-end development through my portfolio.",
        img: "/v1.png",
        link: ["https://v1-portfolio.adrienhecq.com/", "https://github.com/AdrienHq/AdrienHq-Portfolio-V1", "https://github.com/AdrienHq/AdrienHq-Portfolio-V2"],
        linkText: ["Visit the v1", "Github v1", "Github v2"],
        linkTech: ["React", "Framer-motion", "JavaScript", "Next.js", "Tailwind CSS", "HTML", "CSS"],
    },
    {
        id: 4,
        color: "from-purple-300 to-red-300",
        title: "Business Website",
        desc: "I've crafted a website aimed at showcasing the menu and culinary expertise of a renowned restaurant. This project challenged me to master new technologies and significantly expand my proficiency in front-end development.",
        img: "restaurant.png",
        link: ["https://www.restaurant.adrienhecq.com/", "https://github.com/AdrienHq/FrontEndLearningProject"],
        linkText: ["Visit the Restaurant", "Github"],
        linkTech: ["HTML", "CSS"],
    },
];
const ProjectsPage = () => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({target: ref});
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    return (
        <motion.div
            className="h-full"
            initial={{y: "-200vh"}}
            animate={{y: "0%"}}
            transition={{duration: 1}}
        >
            <div className="h-[600vh] relative" ref={ref}>
                <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
                    My Works
                </div>
                <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
                    <motion.div style={{x}} className="flex">
                        <div
                            className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300"/>
                        {items.map((item) => (
                            <div
                                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                                key={item.id}
                            >
                                <div className="flex flex-col gap-8 text-white">
                                    <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl text-black">
                                        {item.title}
                                    </h1>
                                    <div
                                        className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[900px] xl:h-[420px]">
                                        <Image src={item.img} alt="" fill/>
                                    </div>
                                    <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[900px] text-black">
                                        {item.desc}
                                    </p>
                                    {/* Iterate over each link and render it */}
                                    <ul className="flex flex-col sm:flex-row">
                                        {item.linkTech.map((link, index) => (
                                            <li key={index}
                                                className="flex items-center rounded-full p-2 text-sm md:p-4 md:text-md lg:p-2 bg-blue-300 text-black py-2 px-4 mr-2 mb-2">
                                                {item.linkTech[index]}
                                            </li>
                                        ))}
                                    </ul>
                                    {/* Iterate over each link and render it */}
                                    <div className="w-full flex gap-8 justify-end">
                                        {item.linkText.map((link, index) => (
                                            <a key={index} href={item.link[index]} classname="flex justify-end"
                                               target="_blank"
                                               rel="noopener noreferrer">
                                                <button
                                                    className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-transparent hover:bg-blue-800 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded">
                                                    {item.linkText[index]}
                                                </button>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className="w-screen h-screen flex flex-col items-center justify-center text-center">
                <h1 className="text-8xl">Want to see more ?</h1>
                <p className="text-4xl py-14">Here is my GitHub</p>
                <div className="relative py-0">
                    <motion.svg
                        animate={{rotate: 360}}
                        transition={{duration: 8, ease: "linear", repeat: Infinity}}
                        viewBox="0 0 300 300"
                        className="w-44 h-44 md:w-[500px] md:h-[500px] "
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                            />
                        </defs>
                        <text fill="#000">
                            <textPath xlinkHref="#circlePath" className="text-xl">
                                Click me !
                            </textPath>
                        </text>
                    </motion.svg>
                    <Link
                        href="https://github.com/AdrienHq"
                        target="_blank"
                        className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto rounded-full flex items-center justify-center"
                    >
                        <Image src="/hiResGithub.png" alt="Github Image" width={244} height={244}/>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectsPage;