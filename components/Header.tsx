'use client'

import { useEffect, useState } from "react";
import Link from 'next/link'
import { usePathname } from "next/navigation";
import YoutubeLink from "@/components/ui/YoutubeLink";

const Header = () => {
  const path = usePathname()
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);


  return (
    <div className="top-0 sticky bg-neutral-950 bg-opacity-60 z-50">
      <header className="p-4 px-6 sm:px-8 sm:border-b backdrop-filter backdrop-blur-lg text-white border-neutral-800">
        <div className="container mx-auto flex flex-row flex-nowrap items-center justify-between">
          <div className="flex flex-row items-center space-x-4">
            <Link href={'/'}>
              <h1 className="text-2xl font-medium">
                RoadMap
              </h1>
            </Link>
            <span className="hidden sm:inline-block text-neutral-700">
              |
            </span>
            <div className="hidden sm:inline-block">
              <YoutubeLink />
            </div>
          </div>
          <div className="sm:flex flex-row items-center space-x-2 hidden">
            <Link href={'/roadmap'}>
              <button className={`p-2 ${path === '/roadmap' ? 'text-white' : 'text-neutral-500 hover:text-white'} px-3 cursor-pointer transition-all rounded-md flex flex-row items-center justify-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-2 w-5 h-5">
                  <path fillRule="evenodd" d="M8.157 2.176a1.5 1.5 0 0 0-1.147 0l-4.084 1.69A1.5 1.5 0 0 0 2 5.25v10.877a1.5 1.5 0 0 0 2.074 1.386l3.51-1.452 4.26 1.762a1.5 1.5 0 0 0 1.146 0l4.083-1.69A1.5 1.5 0 0 0 18 14.75V3.872a1.5 1.5 0 0 0-2.073-1.386l-3.51 1.452-4.26-1.762ZM7.58 5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0v-6.5A.75.75 0 0 1 7.58 5Zm5.59 2.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5Z" clipRule="evenodd" />
                </svg>
                Roadmap
              </button>
            </Link>
            <Link target="blank" href={'https://calendly.com/nizabizaher/programming-coaching'}>
              <button className="p-2 text-neutral-500 hover:text-white px-3 cursor-pointer transition-all rounded-md flex flex-row items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-2 w-5 h-5">
                  <path fillRule="evenodd" d="M9.664 1.319a.75.75 0 0 1 .672 0 41.059 41.059 0 0 1 8.198 5.424.75.75 0 0 1-.254 1.285 31.372 31.372 0 0 0-7.86 3.83.75.75 0 0 1-.84 0 31.508 31.508 0 0 0-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 0 1 3.305-2.033.75.75 0 0 0-.714-1.319 37 37 0 0 0-3.446 2.12A2.216 2.216 0 0 0 6 9.393v.38a31.293 31.293 0 0 0-4.28-1.746.75.75 0 0 1-.254-1.285 41.059 41.059 0 0 1 8.198-5.424ZM6 11.459a29.848 29.848 0 0 0-2.455-1.158 41.029 41.029 0 0 0-.39 3.114.75.75 0 0 0 .419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 1 0 1.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 0 1 3.095 2.348.75.75 0 0 0 .992 0 26.547 26.547 0 0 1 5.93-3.95.75.75 0 0 0 .42-.739 41.053 41.053 0 0 0-.39-3.114 29.925 29.925 0 0 0-5.199 2.801 2.25 2.25 0 0 1-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 0 1-1.084 3.45 26.503 26.503 0 0 0-1.281-.78A5.487 5.487 0 0 0 6 12v-.54Z" clipRule="evenodd" />
                </svg>
                Coaching
              </button>
            </Link>
          </div>

          {/* burger button */}

          <button onClick={toggleSidebar} className="sm:hidden p-2 px-3 cursor-pointer hover:bg-neutral-900 rounded-md flex flex-row items-center justify-center">
            {!isOpen ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>}
          </button>

        </div>
      </header>

      <div className='sm:hidden p-2 px-6 bg-white bg-opacity-5 backdrop-blur-sm'>
        <YoutubeLink />
      </div>

      {/* sidebar for mobile */}
      {isOpen && (
        <div className={`z-50 sm:hidden absolute p-0 mt-[72px] h-[calc(100vh-72px)] flex flex-col justify-between pb-0 top-0 right-0 overflow-auto border-l border-neutral-800 w-72 bg-neutral-950 bg-opacity-90 backdrop-filter backdrop-blur-3xl `}>

          <ul onClick={toggleSidebar} className="">
            <Link href={'/roadmap'}>
              <li className="border-b border-neutral-800 p-6 text-lg font-medium hover:bg-neutral-900 cursor-pointer flex items-center flex-nowrap justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-4 w-5 h-5">
                  <path fillRule="evenodd" d="M8.157 2.176a1.5 1.5 0 0 0-1.147 0l-4.084 1.69A1.5 1.5 0 0 0 2 5.25v10.877a1.5 1.5 0 0 0 2.074 1.386l3.51-1.452 4.26 1.762a1.5 1.5 0 0 0 1.146 0l4.083-1.69A1.5 1.5 0 0 0 18 14.75V3.872a1.5 1.5 0 0 0-2.073-1.386l-3.51 1.452-4.26-1.762ZM7.58 5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0v-6.5A.75.75 0 0 1 7.58 5Zm5.59 2.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5Z" clipRule="evenodd" />
                </svg>
                Roadmap
              </li>
            </Link>
            <Link target="blank" href={'https://calendly.com/nizabizaher/programming-coaching'}>
              <li className="p-6 text-lg font-medium hover:bg-neutral-900 cursor-pointer flex items-center flex-nowrap justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-4 w-5 h-5">
                  <path fillRule="evenodd" d="M9.664 1.319a.75.75 0 0 1 .672 0 41.059 41.059 0 0 1 8.198 5.424.75.75 0 0 1-.254 1.285 31.372 31.372 0 0 0-7.86 3.83.75.75 0 0 1-.84 0 31.508 31.508 0 0 0-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 0 1 3.305-2.033.75.75 0 0 0-.714-1.319 37 37 0 0 0-3.446 2.12A2.216 2.216 0 0 0 6 9.393v.38a31.293 31.293 0 0 0-4.28-1.746.75.75 0 0 1-.254-1.285 41.059 41.059 0 0 1 8.198-5.424ZM6 11.459a29.848 29.848 0 0 0-2.455-1.158 41.029 41.029 0 0 0-.39 3.114.75.75 0 0 0 .419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 1 0 1.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 0 1 3.095 2.348.75.75 0 0 0 .992 0 26.547 26.547 0 0 1 5.93-3.95.75.75 0 0 0 .42-.739 41.053 41.053 0 0 0-.39-3.114 29.925 29.925 0 0 0-5.199 2.801 2.25 2.25 0 0 1-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 0 1-1.084 3.45 26.503 26.503 0 0 0-1.281-.78A5.487 5.487 0 0 0 6 12v-.54Z" clipRule="evenodd" />
                </svg>
                Coaching
              </li>
            </Link>
          </ul>
        </div>
      )}

      {/* sidebar bg */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="absolute top-0 mt-[72px] h-[calc(100vh-72px)] left-0 z-40 w-full opacity-50 bg-neutral-950 sm:hidden"
          style={{ zIndex: 10 }}
        ></div>
      )}
    </div>
  )
}

export default Header