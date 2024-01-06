const Different = () => {
  return (
    <div className="flex flex-col space-y-10 text-left w-full">

      <div className="flex flex-row space-x-4 mb-32">
        <div className="w-2/3 ">
          <h1 className="text-left text-5xl mb-6 font-bold">
            <span className="text-8xl">H</span>
            ow is this
            roadmap different?
          </h1>
          <p className="text-gray-400 text-lg">
            Unlike college & programming bootcamps, not only will you learn how
            to code, but will do so by building applicable projects for job
            applications, learning how code works behind the scenes, & truly
            understand how to be a modern day programmer.
          </p>
        </div>
        <div className="w-1/3 flex items-center justify-center relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-32 h-32 animate-bounce">
            <path fillRule="evenodd" d="M8.157 2.176a1.5 1.5 0 0 0-1.147 0l-4.084 1.69A1.5 1.5 0 0 0 2 5.25v10.877a1.5 1.5 0 0 0 2.074 1.386l3.51-1.452 4.26 1.762a1.5 1.5 0 0 0 1.146 0l4.083-1.69A1.5 1.5 0 0 0 18 14.75V3.872a1.5 1.5 0 0 0-2.073-1.386l-3.51 1.452-4.26-1.762ZM7.58 5a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0v-6.5A.75.75 0 0 1 7.58 5Zm5.59 2.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5Z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      <h1 className="text-5xl font-semibold">
        Projects Built
      </h1>

      <div className="flex flex-row space-x-4">
        <div className="w-1/2 border border-neutral-800 rounded-md p-6 group cursor-pointer bg-transparent backdrop-blur-sm backdrop-filter">
          <img
            className="w-full h-60"
            src="https://placehold.co/462x240"
            alt="no image"
          />
          <h1 className="text-xl font-medium mt-6 group-hover:underline">
            Voice assistant
          </h1>
        </div>

        <div className="w-1/2 border border-neutral-800 rounded-md p-6 group cursor-pointer bg-transparent backdrop-blur-sm backdrop-filter">
          <img
            className="w-full h-60"
            src="https://placehold.co/462x240"
            alt="no image"
          />
          <h1 className="text-xl font-medium mt-6 group-hover:underline">
            My Mentor AI
          </h1>
        </div>
      </div>

      <button className="inline-flex animate-shimmer items-center justify-center rounded-md border border-gray-800 bg-[linear-gradient(110deg,#0a0a0a,45%,#525252,55%,#0a0a0a)] bg-[length:200%_100%] p-6 text-white transition-colors outline-none">
        GET STARTED
        <span className="text-xl ml-4">
          -&gt;
        </span>
      </button>

    </div>
  )
}

export default Different