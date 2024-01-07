import Link from 'next/link'
import RoadmapCardList from './RoadmapCardList'

const page = () => {
  return (
    <main className="container mx-auto flex flex-col px-6 lg:px-24 xl:px-60 min-h-[calc(100dvh-280px)] sm:min-h-[calc(100dvh-238px)]">

      <div>
        <h1 className="font-semibold text-5xl text-white mb-3 mt-20">Roadmap</h1>

        <Link className='flex flex-row items-center underline w-fit hover:text-red-400 text-md' target='blank' href="https://www.youtube.com/watch?si=chsJkstYfzdfymp1&v=tqmG8Xjb4rM&feature=youtu.be">

          <svg className='w-5 h-5 mr-2 hidden sm:block' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
          </svg>
          Struggling? Checkout the SD Routine!
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-3 w-5 h-5 hidden sm:block">
            <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>

      <section className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10'>
        <RoadmapCardList />
      </section>

    </main>
  )
}

export default page