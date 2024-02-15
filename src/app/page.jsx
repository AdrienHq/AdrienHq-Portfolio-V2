"use client"

import Image from "next/image";
import {motion} from "framer-motion";
import Link from "next/link";

const Homepage = () => {
    return (
        <motion.div className="h-full" initial={{y: "-200vh"}} animate={{y: "0%"}} transition={{duration: 1}}>
            <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
                    <div className="flex flex-col gap-8">
                        <h1 className="text-4xl md:text-6xl text-stone-950 font-bold flex">Adrien Hecq</h1>
                        <h2 className="text-2xl md:text-4xl text-stone-700 font-semibold">Back-end web developer</h2>
                        <p className="md:text-xl font-medium text-stone-600">Crafting seamless, captivating, and user-centric digital journeys, I strive for excellence in web development,
                            ensuring accessibility and engagement every step of the way.</p>
                    </div>
                    <div className="w-full flex gap-4 justify-end">
                        <Link href="https://github.com/AdrienHq" target="_blank" className="flex ">
                            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">GitHub</button>
                        </Link>
                        <Link href="/contact" className="flex ">
                            <button className="p-4 rounded-lg ring-1 ring-black ">Contact Me</button>
                        </Link>
                    </div>
                </div>
                <div className="h-1/2 lg:h-full lg:w-1/2 relative">
                    <Image src="/homeia.png" alt="" fill className="object-contain"/>
                </div>
            </div>
        </motion.div>
    );
};

export default Homepage;
