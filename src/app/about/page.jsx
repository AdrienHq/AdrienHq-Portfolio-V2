"use client"

import {motion, useInView, useScroll} from "framer-motion";
import Animation from "@/components/animation";
import {useRef} from "react";
import Link from "next/link";

const AboutPage = () => {

    const containerRef = useRef();
    const {scrollYProgress} = useScroll({container: containerRef});

    const experienceRef = useRef();
    const isExperienceRefInView = useInView(experienceRef, {once: true, margin: "-100px"});

    return (
        <motion.div className="h-full" initial={{y: "-200vh"}} animate={{y: "0%"}} transition={{duration: 1}}>
            <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
                <div
                    className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2.5/3 lg:pr-0 xl:w-1.1/2">
                    <div className="flex flex-col gap-12 justify-center pb-48">
                        <h1 className="text-4xl md:text-6xl text-stone-950 font-bold flex">WHO AM I ?</h1>
                        <p className="md:text-xl font-medium text-stone-600">Passionate about technology from a young
                            age, I transitioned from Java development to specializing in Symfony. Now, I&apos;m focused on
                            broadening my skills in frontend development to enhance team collaboration and pursue
                            becoming a Full-stack developer.
                        </p>
                        <span className="text-stone-600 italic pb-10 ">Crafting seamless, captivating, and
                            user-centric digital journeys, I strive for excellence in web development,
                            ensuring accessibility and engagement every step of the way.</span>
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
                    <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
                        <motion.h1 initial={{x: "-400px"}} animate={isExperienceRefInView ? {x: "0"} : {}}
                                   transition={{delay: 0.2}} className="font-bold text-2xl">EXPERIENCE
                        </motion.h1>
                        <motion.div initial={{x: "-800px"}} animate={isExperienceRefInView ? {x: "0"} : {}}
                                    transition={{delay: 0.5}} className="">
                            <div className="flex justify-between h-70">
                                {/*    LEFT*/}
                                <div className="w-1/3">
                                    <div className="bg-white p-2 font-semibold rounded-b-lg rounded-s-lg">Internship
                                        Back-End
                                        Developper
                                    </div>
                                    <div className="p-3 text-medium italic w-full">I opted for an internship at Smals, a
                                        valuable learning experience. Assigned to test Elasticms bundles, the custom
                                        CMS, I utilized PhpUnit extensively. This opportunity allowed me to cultivate
                                        expertise in Symfony coding, starting from scratch and contributing effectively
                                        to the team&apos;s objectives.
                                    </div>
                                    <div className="p-3 text-red-400 text-large font-semibold">2020-2020</div>
                                    <div className="p-1 rounded px-6 bg-white text-medium font-semibold w-fit"><Link
                                        href="https://www.smals.be/fr" target="_blank">Smals</Link></div>
                                </div>
                                {/*    CENTER*/}
                                <div className="w-1/6 flex justify-center">
                                    {/*    LINE*/}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        <div
                                            className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/*    RIGHT*/}
                                <div className="w-1/3"></div>
                            </div>

                            <div className="flex justify-between h-70">
                                {/*    LEFT*/}
                                <div className="w-1/3"></div>
                                {/*    CENTER*/}
                                <div className="w-1/6 flex justify-center">
                                    {/*    LINE*/}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        <div
                                            className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/*    RIGHT*/}
                                <div className="w-1/3">
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-e-lg">Back-End
                                        Developper Symfony
                                    </div>
                                    <div className="p-3 text-medium italic">Following my internship, Smals appointed me
                                        as a PHP/Symfony Back-end Developer. I collaborated with numerous clients,
                                        integrating new features into Smals&apos;s CMS. Working alongside a Front-end
                                        developer, an Analyst, and a Webmaster, we adhered to Agile methodologies.
                                        Git/GitHub facilitated progress tracking and ensured streamlined project
                                        management for CMS development at Smals.
                                    </div>
                                    <div className="p-3 text-red-400 text-large font-semibold">2020-2022</div>
                                    <div className="p-1 rounded px-6 bg-white text-medium font-semibold w-fit"><Link
                                        href="https://www.smals.be/fr" target="_blank">Smals</Link></div>
                                </div>
                            </div>
                            <div className="flex justify-between h-70">
                                {/*    LEFT*/}
                                <div className="w-1/3">
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Back-End
                                        Developper Symfony
                                    </div>
                                    <div className="p-3 text-medium italic">
                                        Continuing my career, I joined the scale-up Stellar, driven by a passion for
                                        mastering emerging technologies. Specializing in Symfony and Api Platform, I
                                        collaborated closely with the frontend team, gaining exposure to React,
                                        TypeScript, and Cucumber for comprehensive testing.
                                    </div>
                                    <div className="p-3 text-red-400 text-large font-semibold">2022-2024</div>
                                    <div className="p-1 rounded px-6 bg-white text-medium font-semibold w-fit"><Link
                                        href="https://stellar.io/" target="_blank">Stellar</Link></div>
                                </div>
                                {/*    CENTER*/}
                                <div className="w-1/6 flex justify-center">
                                    {/*    LINE*/}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        <div
                                            className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/*    RIGHT*/}
                                <div className="w-1/3"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
                    <Animation scrollYProgress={scrollYProgress}/>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutPage;