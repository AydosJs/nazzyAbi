import Link from "next/link"

const Footer = () => {
  return (
    <footer className="text-white border-t border-neutral-800 mt-20 backdrop-blur-sm backdrop-filter body-font">
      <div className="container p-8 mx-auto flex items-center sm:justify-between flex-col sm:flex-row space-y-6 sm:space-y-0">
        <div className="flex flex-row items-center space-x-4">
          {/* <p className="text-sm text-gray-400 ">
            © 2024 RoadMap —
          </p> */}
          <Link target="blank" href={'https://www.youtube.com/@NizzyABI'} className="hover:underline transition-all text-sm flex flex-row items-center">
            <svg className='w-6 h-6 mr-2' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
              <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
            </svg>
            Subscribe for daily videos
          </Link>
        </div>
        <div className="flex flex-row space-x-4">
          <Link href={'#'} className="text-gray-400 hover:text-white cursor-pointer transition-all">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </Link>
          <Link href={'#'} className="text-gray-400 hover:text-white cursor-pointer transition-all">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer