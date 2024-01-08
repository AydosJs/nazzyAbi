'use client'

import Spotlight from "@/components/ui/Spotlight"
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect"
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroSectionWithEmailSignup = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMountedDiv, setIsMountedDiv] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 1500);

    const timerDiv = setTimeout(() => {
      setIsMountedDiv(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timerDiv);
    };
  }, []);
  return (
    <div className="relative pb-32 md:pb-16 flex items-center flex-col space-y-10 min-h-[calc(100dvh-20px)] md:min-h-[calc(100dvh-85px)] justify-center">

      <Spotlight
        className="hidden sm:block sm:-top-20 sm:left-2  md:-top-24 md:left-10 lg:left-60 lg:-top-10 2xl:-top-24 2xl:left-54"
        fill="white"
      />

      <div>
        <TextGenerateEffect delay={0.4} words={'Learn. Build. Grow.'} className="text-4xl md:text-7xl font-bold text-center" />
        <motion.p
          className="transition-all duration-300 ease-in-out delay-150 text-xs md:text-xl text-center font-normal text-neutral-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: isMounted ? 1 : 0 }}
          transition={{ duration: 3 }}
        >
          The ultimate roadmap to learning code, best practices, and modern
          day technologies.
        </motion.p>
      </div>

      <motion.div
        className="relative group"
        initial={{ opacity: 0 }}
        animate={{ opacity: isMountedDiv ? 1 : 0 }}
        transition={{ duration: 3 }}
      >
        <input
          placeholder="Your email"
          type="text"
          className="p-5 border pr-14 border-white border-opacity-20 bg-white bg-opacity-10 group-hover:backdrop-blur-[1px] backdrop-filter rounded-full outline-none w-64 sm:w-96 
          bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.4)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat hover:bg-[position:200%_0,0_0] hover:duration-[1000ms]
          "
        />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute w-8 h-8 top-1/2 transition-all -translate-y-1/2 right-4 bg-opacity-20 cursor-pointer bg-white opacity-50 group-hover:opacity-100 text-white p-1 rounded-full">
          <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
        </svg>
      </motion.div>

    </div>
  )
}

export default HeroSectionWithEmailSignup