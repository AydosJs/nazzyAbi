export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-60 space-y-20 mb-10">

      <div className="flex items-center flex-col space-y-10 min-h-[calc(100vh-85px)] justify-center">
        <div>
          <h1 className="text-7xl font-bold text-center mb-2">
            Learn. Build. Grow.
          </h1>
          <p className="text-xl text-center font-normal text-gray-400">
            The ultimate roadmap to learning code, best practices, and modern day technologies.
          </p>
        </div>

        <div>
          <input placeholder="Your email" type="text" className="p-5 border bg-neutral-950 border-white rounded-full outline-none w-96" />
        </div>
      </div>

      <div className="flex flex-col space-y-10 text-left w-full">
        <div >
          <h1 className="text-left text-5xl mb-4 font-bold">
            How is this roadmap different?
          </h1>
          <p className="text-gray-400 text-lg">
            Unlike college & programming bootcamps, not only will you learn how to code, but will do so by building applicable projects for job applications, learning how code works behind the scenes, & truly understand how to be a modern day programmer.
          </p>
        </div>

        <div className="flex flex-row space-x-4">
          <div className="w-1/2 border border-gray-800 rounded-md p-6 group cursor-pointer hover:bg-neutral-900">
            <img className="w-full h-60" src="https://placehold.co/462x240" />
            <h1 className="text-xl font-medium mt-6 group-hover:underline">Voice assistant</h1>
          </div>

          <div className="w-1/2 border border-gray-800 rounded-md p-6 group cursor-pointer hover:bg-neutral-900">
            <img className="w-full h-60" src="https://placehold.co/462x240" />
            <h1 className="text-xl font-medium mt-6 group-hover:underline">My Mentor AI</h1>
          </div>
        </div>
      </div>

    </main>
  )
}
