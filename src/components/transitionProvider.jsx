"use client";

import {AnimatePresence, motion} from "framer-motion";
import Navbar from "@/components/navbar";
import {usePathname} from "next/navigation";

const TransitionProvider = ({children}) => {
    const pathName = usePathname()
    return (
        <AnimatePresence mode="wait">
            <div key={pathName} className='h-screen w-screen bg-gradient-to-b from-pink-200 to-blue-200 '>
                <motion.div
                    className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
                    animate={{height: "0vh"}}
                    exit={{height: "140vh"}}
                    transition={{duration: 0.5, ease: "easeOut"}}
                />
                <motion.div
                    className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit"
                    initial={{opacity: 1}}
                    animate={{opacity: 0}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.9, ease: "easeOut"}}
                >
                    {pathName.substring(1)}
                </motion.div>
                <div className='h-24'>
                    <Navbar/>
                </div>
                <div className="h-[calc(100vh-6rem)]">
                    {children}
                </div>
            </div>
        </AnimatePresence>
    );
};

export default TransitionProvider;