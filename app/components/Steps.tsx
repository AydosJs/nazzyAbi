const Steps = () => {
  return (
    <section className="max-w-5xl mx-auto py-10">

      <h1 className="text-left text-5xl mb-10 font-bold">
        The Roadmap -&gt;
      </h1>

      <div>
        <div className="flex flex-row">
          <div className="hidden md:flex flex-col items-center">
            <div className="w-32 py-5 border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
              <div className="text-3xl font-black text-gray-400">Step 1</div>
              <div className="text-gray-400 text-sm">BASICS</div>
            </div>
            <div className="h-full border-l-4 border-transparent">
              <div className="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
            </div>
          </div>
          <div className="flex-auto rounded  border-gray-300">
            <div className="flex md:flex-row flex-col items-center">
              <div className="flex-auto">
                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-400"><span className="font-black">Step 1</span> - Idea</div>
                <div className="py-3 text-3xl text-white font-semibold">The Basics</div>
                <div className="text-gray-400">
                  You will start your programming journey at the very beginning. In section 1, you will learn the basics of code such as the different programming langauges, building your first website, data sturctures, algorithms, and modern day languages.
                </div>
              </div>
              <div className="md:w-96 w-full p-5 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-20 h-20 object-scale-down text-white">
                  <path fill-rule="evenodd" d="M6.28 5.22a.75.75 0 0 1 0 1.06L2.56 10l3.72 3.72a.75.75 0 0 1-1.06 1.06L.97 10.53a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Zm7.44 0a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 0 1 0-1.06ZM11.377 2.011a.75.75 0 0 1 .612.867l-2.5 14.5a.75.75 0 0 1-1.478-.255l2.5-14.5a.75.75 0 0 1 .866-.612Z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start flex-row">
          <div className="border-t-4 border-r-4 border-transparent">
            <div className="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
          </div>
          <div className="border-t-4 border-transparent flex-auto">
            <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
          </div>
          <div className="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
        </div>
        <div className="flex flex-row-reverse">
          <div className="hidden md:flex flex-col items-center">
            <div className="w-32 py-5 border-gray-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
              <div className="text-3xl font-black text-gray-400">Step 2</div>
              <div className="text-gray-400 text-sm">HTML $ CSS</div>
            </div>
            {/* right line */}
            <div className="h-full border-r-4 border-transparent">
              <div className="border-l-4 ml-4 h-full border-gray-300 border-dashed"></div>
            </div>
          </div>
          <div className="flex-auto rounded border-gray-300">
            <div className="flex md:flex-row flex-col items-center">
              <div className="flex-auto">
                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-400"><span className="font-black">Step 2</span> - Collaboration</div>
                <div className="py-3 text-3xl text-white font-semibold ">HTML, CSS, & JavaScript</div>
                <div className=" text-gray-400">
                  Now that you have some programming experience, it’s time to get your hands dirty & learn your first languages for the web! In section 2, you’ll know how to build responsive websites & functional applications using HTML, CSS, & JavaScript which will be put on your resume.
                </div>
              </div>
              <div className="md:w-96 w-full p-5 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256" >
                  <g fill="#ffffff" fillRule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M6.66797,4c-1.46094,0 -2.66797,1.20703 -2.66797,2.66797v36.66406c0,1.46094 1.20703,2.66797 2.66797,2.66797h36.66406c1.46094,0 2.66797,-1.20312 2.66797,-2.66797v-36.66406c0,-1.46094 -1.20312,-2.66797 -2.66797,-2.66797zM6.66797,6h36.66406c0.37109,0 0.66797,0.29688 0.66797,0.66797v36.66406c0,0.37109 -0.29687,0.66797 -0.66797,0.66797h-36.66406c-0.37109,0 -0.66797,-0.29687 -0.66797,-0.66797v-36.66406c0,-0.37109 0.29688,-0.66797 0.66797,-0.66797zM23,23v12.57422c0,1.92969 -0.73047,2.42578 -2,2.42578c-1.32812,0 -2.25,-0.82812 -2.85937,-1.90234l-3.14062,1.90234c0.91016,1.92578 3.14063,4 6.23438,4c3.42188,0 5.76563,-1.82031 5.76563,-5.81641v-13.18359zM35.45313,23c-3.40625,0 -5.58984,2.17969 -5.58984,5.04297c0,3.10547 1.83203,4.57422 4.58594,5.74609l0.95313,0.41016c1.73828,0.76172 2.59766,1.22656 2.59766,2.53516c0,1.08984 -0.82812,1.87891 -2.41016,1.87891c-1.88281,0 -2.77344,-1.27734 -3.58984,-2.61328l-3,2c1.12109,2.21484 3.13281,4 6.67578,4c3.625,0 6.32422,-1.88281 6.32422,-5.31641c0,-3.1875 -1.82812,-4.60547 -5.07422,-5.99609l-0.95312,-0.40625c-1.63672,-0.71094 -2.34766,-1.17187 -2.34766,-2.31641c0,-0.92578 0.71094,-1.63672 1.82813,-1.63672c1.09766,0 1.80078,0.46484 2.45313,1.63672l2.97266,-1.90625c-1.25391,-2.21484 -3,-3.05859 -5.42578,-3.05859z"></path></g></g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* right to left */}

        <div className="flex items-start flex-row-reverse">
          <div className="border-t-4 border-l-4 border-transparent">
            <div className="w-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-b-4 rounded-br-full"></div>
          </div>
          <div className="border-t-4 border-transparent flex-auto">
            <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
          </div>
          <div className="w-16 mt-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-t-4 rounded-tl-full"></div>
        </div>
        <div className="flex flex-row">
          <div className="hidden md:flex flex-col items-center">
            <div className="w-32 py-5 border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
              <div className="text-3xl font-black text-gray-400">Step 3</div>
              <div className="text-gray-400 text-sm">FRONTEND</div>
            </div>
            <div className="h-full border-l-4 border-transparent">
              <div className="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
            </div>
          </div>
          <div className="flex-auto rounded  border-gray-300">
            <div className="flex md:flex-row flex-col items-center">
              <div className="flex-auto">
                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-400"><span className="font-black">Step 3</span> - Planification</div>
                <div className="py-3 text-3xl text-white font">Frontend Frameworks</div>
                <div className=" text-gray-400">
                  Knowing frameworks is a must if you want to get a job in tech. Over 60% of developers use a framework to help them code! So in section 3, you’ll learn & build projects in popular frameworks such as React.JS & Next.JS that can be used in your resume!
                </div>
              </div>
              <div className="md:w-96 w-full p-5 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                  <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M34.55469,3.98438c-0.77969,-0.02622 -1.5958,0.10972 -2.41406,0.375c-1.63652,0.53057 -3.35142,1.56451 -5.11133,2.99609c-0.68971,0.56104 -1.38567,1.20236 -2.08398,1.88281c-0.68291,-0.66318 -1.36458,-1.28924 -2.03906,-1.83789c-1.75849,-1.43043 -3.46875,-2.46282 -5.10156,-2.99219c-1.63281,-0.52936 -3.25746,-0.54577 -4.5918,0.22461c-1.33433,0.77038 -2.13227,2.18454 -2.49024,3.86328c-0.35796,1.67874 -0.32048,3.6779 0.03906,5.91602c0.12489,0.7774 0.30495,1.59297 0.50781,2.42383c-0.76244,0.23107 -1.50285,0.47402 -2.18945,0.74219c-2.0721,0.80931 -3.78663,1.77754 -5.03516,2.92969c-1.24853,1.15215 -2.05469,2.55049 -2.05469,4.08594c0,1.53545 0.80616,2.93183 2.05469,4.08398c1.24852,1.15215 2.96306,2.12233 5.03516,2.93164c0.73417,0.28675 1.52904,0.54495 2.34961,0.78906c-0.29516,1.10284 -0.53429,2.17303 -0.69727,3.1875c-0.35984,2.23992 -0.39783,4.23933 -0.03906,5.92187c0.35878,1.68255 1.15712,3.10472 2.49805,3.87891c1.34093,0.77419 2.97286,0.75518 4.60938,0.22461c1.63652,-0.53057 3.34947,-1.56256 5.10938,-2.99414c0.68336,-0.55587 1.3746,-1.18998 2.06641,-1.86328c0.6951,0.67698 1.38977,1.3147 2.07617,1.87305c1.75849,1.43043 3.4707,2.46282 5.10352,2.99219c1.63281,0.52936 3.25551,0.54577 4.58984,-0.22461c1.33433,-0.77038 2.13227,-2.18454 2.49023,-3.86328c0.35796,-1.67874 0.31853,-3.6779 -0.04102,-5.91602c-0.16341,-1.01722 -0.4027,-2.08901 -0.69922,-3.19531c0.84768,-0.25006 1.66765,-0.5152 2.42383,-0.81055c2.0721,-0.80931 3.78663,-1.77949 5.03516,-2.93164c1.24853,-1.15215 2.05469,-2.54854 2.05469,-4.08398c0,-1.53545 -0.80616,-2.93379 -2.05469,-4.08594c-1.24853,-1.15215 -2.96306,-2.12037 -5.03516,-2.92969c-0.69645,-0.27202 -1.44823,-0.51813 -2.22266,-0.75195c0.20451,-0.83595 0.38608,-1.65737 0.51172,-2.43945c0.35983,-2.23991 0.39784,-4.24128 0.03906,-5.92383c-0.35877,-1.68255 -1.15907,-3.10277 -2.5,-3.87695c-0.67047,-0.38709 -1.41367,-0.57535 -2.19336,-0.60156zM34.46289,6.01953c0.48926,0.01338 0.90664,0.12981 1.26367,0.33594c0.71406,0.41226 1.24186,1.21462 1.52344,2.53516c0.28158,1.32053 0.27185,3.1047 -0.06055,5.17383c-0.11381,0.70843 -0.27905,1.45924 -0.4668,2.22852c-2.04495,-0.49214 -4.28569,-0.85754 -6.67383,-1.07227c-1.19973,-1.66224 -2.43287,-3.17433 -3.67578,-4.51758c0.65714,-0.64146 1.31002,-1.2414 1.94727,-1.75977c1.62571,-1.32243 3.16481,-2.22226 4.44922,-2.63867c0.6422,-0.20821 1.2041,-0.29854 1.69336,-0.28516zM15.48633,6.02539c0.49209,-0.01374 1.05516,0.07635 1.69922,0.28516c1.28811,0.41761 2.8299,1.31705 4.45703,2.64063c0.62431,0.50784 1.26287,1.0947 1.90625,1.7207c-1.25187,1.35391 -2.49365,2.88183 -3.70117,4.55859c-2.37965,0.21869 -4.6124,0.58756 -6.64844,1.08203c-0.18653,-0.7656 -0.34958,-1.51341 -0.46289,-2.21875c-0.33269,-2.07092 -0.34099,-3.8573 -0.05859,-5.18164c0.28239,-1.32434 0.8145,-2.13081 1.53516,-2.54687c0.36032,-0.20803 0.78135,-0.32611 1.27344,-0.33984zM24.97656,12.14258c0.8145,0.8864 1.6295,1.85672 2.4375,2.90039c-0.79403,-0.03311 -1.59777,-0.05274 -2.41406,-0.05274c-0.83254,0 -1.65159,0.02026 -2.46094,0.05469c0.80829,-1.04462 1.62269,-2.01518 2.4375,-2.90234zM25,17.00977c1.35989,0 2.68535,0.05588 3.97461,0.15039c0.88712,1.27416 1.75404,2.6259 2.58008,4.05664c0.72582,1.25715 1.38264,2.51237 1.98047,3.75195c-0.60414,1.25603 -1.27197,2.52822 -2.00781,3.80273c-0.64774,1.12191 -1.32415,2.18746 -2.01172,3.21484c-1.45631,0.12172 -2.96532,0.18945 -4.51562,0.18945c-1.58762,0 -3.13054,-0.07175 -4.61914,-0.19922c-0.67612,-1.01261 -1.34112,-2.06398 -1.97852,-3.16797c-0.73416,-1.2716 -1.39877,-2.53951 -2.00195,-3.79297c0.60572,-1.26053 1.27331,-2.53745 2.01172,-3.81641c0.82171,-1.42324 1.6861,-2.76716 2.56836,-4.03516c1.30314,-0.09664 2.64398,-0.1543 4.01953,-0.1543zM31.55078,17.41016c1.64775,0.20566 3.19487,0.49138 4.63477,0.83398c-0.42742,1.40115 -0.95389,2.86467 -1.5918,4.375c-0.41418,-0.79842 -0.84315,-1.59956 -1.30664,-2.40234c-0.56138,-0.97234 -1.14508,-1.90084 -1.73633,-2.80664zM18.34375,17.42578c-0.5791,0.88932 -1.14891,1.7988 -1.69922,2.75195c-0.46944,0.81309 -0.90731,1.625 -1.32617,2.43359c-0.6324,-1.50125 -1.1557,-2.95645 -1.58008,-4.34961c1.42972,-0.34336 2.96848,-0.62791 4.60547,-0.83594zM38.16406,18.77539c0.70888,0.21449 1.3935,0.43832 2.02148,0.68359c1.91015,0.74606 3.4211,1.62951 4.40039,2.5332c0.97929,0.90369 1.4043,1.76551 1.4043,2.60156c0,0.83605 -0.42501,1.69787 -1.4043,2.60156c-0.97929,0.90369 -2.49024,1.78714 -4.40039,2.5332c-0.69785,0.27256 -1.46459,0.51973 -2.26172,0.75391c-0.56863,-1.75878 -1.29442,-3.59365 -2.1582,-5.4668c0.99316,-2.15054 1.79546,-4.24734 2.39844,-6.24023zM11.80273,18.78516c0.59606,1.97294 1.38812,4.04905 2.36719,6.17773c-0.86945,1.88406 -1.59883,3.72936 -2.16992,5.49805c-0.76904,-0.22802 -1.50979,-0.46849 -2.18555,-0.73242c-1.91015,-0.74606 -3.4211,-1.62951 -4.40039,-2.5332c-0.97929,-0.90369 -1.4043,-1.76551 -1.4043,-2.60156c0,-0.83605 0.42501,-1.69787 1.4043,-2.60156c0.97929,-0.90369 2.49024,-1.78714 4.40039,-2.5332c0.61832,-0.2415 1.29146,-0.46215 1.98828,-0.67383zM25,20c-2.74958,0 -5,2.25042 -5,5c0,2.74958 2.25042,5 5,5c2.74958,0 5,-2.25042 5,-5c0,-2.74958 -2.25042,-5 -5,-5zM25,22c1.6687,0 3,1.3313 3,3c0,1.6687 -1.3313,3 -3,3c-1.6687,0 -3,-1.3313 -3,-3c0,-1.6687 1.3313,-3 3,-3zM34.61914,27.36328c0.52446,1.24121 0.98032,2.45577 1.36328,3.62695c-1.20261,0.27886 -2.48313,0.51382 -3.83008,0.69922c0.38773,-0.61867 0.77064,-1.24888 1.14453,-1.89648c0.46868,-0.81178 0.90397,-1.62249 1.32227,-2.42969zM15.3418,27.36523c0.42051,0.8122 0.85847,1.62652 1.33008,2.44336c0.36919,0.63946 0.74618,1.26377 1.12891,1.875c-1.34296,-0.18622 -2.61955,-0.42199 -3.81836,-0.70117c0.38123,-1.16761 0.83732,-2.37963 1.35938,-3.61719zM13.40625,32.92383c1.80982,0.42874 3.77147,0.75808 5.85156,0.97266c1.38884,2.00876 2.83486,3.81281 4.29102,5.39063c-0.65102,0.63475 -1.29626,1.23047 -1.92773,1.74414c-1.62571,1.32243 -3.16677,2.22031 -4.45117,2.63672c-1.28441,0.41641 -2.24298,0.36148 -2.95703,-0.05078c-0.71406,-0.41226 -1.2399,-1.21462 -1.52149,-2.53516c-0.28158,-1.32053 -0.2738,-3.10275 0.05859,-5.17187c0.15079,-0.93866 0.37615,-1.94378 0.65625,-2.98633zM36.56055,32.93164c0.28224,1.04835 0.50854,2.05817 0.66016,3.00195c0.33269,2.07092 0.34099,3.85535 0.05859,5.17969c-0.28239,1.32434 -0.81255,2.13276 -1.5332,2.54883c-0.72065,0.41607 -1.6865,0.4723 -2.97461,0.05469c-1.28811,-0.41761 -2.82991,-1.319 -4.45703,-2.64258c-0.63601,-0.51736 -1.28573,-1.11596 -1.94141,-1.75586c1.46562,-1.58377 2.92242,-3.3976 4.32031,-5.41797c2.08534,-0.21314 4.05243,-0.54052 5.86719,-0.96875zM21.86719,34.10156c1.02676,0.05596 2.06706,0.09375 3.13281,0.09375c1.0305,0 2.03706,-0.03552 3.03125,-0.08789c-1.01629,1.37117 -2.05222,2.61773 -3.08398,3.74023c-1.03114,-1.1249 -2.06512,-2.37369 -3.08008,-3.74609z"></path></g></g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start flex-row">
          <div className="border-t-4 border-r-4 border-transparent">
            <div className="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
          </div>
          <div className="border-t-4 border-transparent flex-auto">
            <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
          </div>
          <div className="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
        </div>
        <div className="flex flex-row-reverse">
          <div className="hidden md:flex flex-col items-center">
            <div className="w-32 py-5  border-gray-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
              <div className="text-3xl font-black text-gray-400">Step 4</div>
              <div className="text-gray-400 text-sm">BACKEND</div>
            </div>
            <div className="h-full border-r-4 border-transparent">
              <div className="border-l-4 ml-4 h-full border-gray-300 border-dashed"></div>
            </div>
          </div>

          <div className="flex-auto  rounded  border-gray-300">
            <div className="flex md:flex-row flex-col items-center">
              <div className="flex-auto">
                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-400"><span className="font-black">Step 4</span> - Implementation</div>
                <div className="py-3 text-3xl text-white font">Backend Languages</div>
                <div className=" text-gray-400">
                  Up to this point, you’ve only built ‘front-end’ applications (things that users can see). However, the backend is equally as important. IIt’s how we make accounts, store data, and create usernames & passwords.Thus, in section 4, you’ll learn about the backend languages (MongoDB, SQL & Firebase) so you can build apps that work.
                </div>
              </div>
              <div className="md:w-96 w-full p-5 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                  <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(10.66667,10.66667)"><path d="M21.612,17.714l-2.125,-13c-0.059,-0.358 -0.307,-0.657 -0.649,-0.78c-0.342,-0.121 -0.724,-0.05 -0.997,0.189l-3.247,2.845l-1.829,-3.551c-0.166,-0.321 -0.492,-0.528 -0.853,-0.541c-0.362,-0.013 -0.701,0.169 -0.89,0.478l-1.092,1.786l-2.338,-4.619c-0.191,-0.377 -0.603,-0.585 -1.019,-0.54c-0.42,0.054 -0.76,0.366 -0.85,0.78l-3.7,17.026c-0.117,0.539 0.225,1.072 0.765,1.189c0.027,0.006 0.054,0.005 0.081,0.009c0.003,0.001 0.004,0.004 0.007,0.005l8.455,4.875c0.154,0.09 0.326,0.135 0.499,0.135c0.174,0 0.348,-0.045 0.503,-0.136l8.795,-5.125c0.358,-0.209 0.551,-0.616 0.484,-1.025zM11.801,5.915l1.242,2.411l-1.039,0.91l-1.012,-1.998zM10.451,10.597l-3.244,2.842l2.56,-4.193zM7.079,3.937l1.626,3.211l-3.607,5.907zM11.827,21.844l-6.742,-3.887l7.357,-6.446c0.007,-0.008 0.016,-0.012 0.023,-0.02l5.339,-4.677l1.724,10.543z"></path></g></g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* right to left step-5 */}
        <div className="flex items-start flex-row-reverse">
          <div className="border-t-4 border-l-4 border-transparent">
            <div className="w-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-b-4 rounded-br-full"></div>
          </div>
          <div className="border-t-4 border-transparent flex-auto">
            <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
          </div>
          <div className="w-16 mt-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-t-4 rounded-tl-full"></div>
        </div>

        <div className="flex flex-row">
          <div className="hidden md:flex flex-col items-center">
            <div className="w-32 py-5 border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
              <div className="text-3xl font-black text-gray-400">Step 5</div>
              <div className="text-gray-400 text-sm">FULLSTACK</div>
            </div>
            <div className="h-full border-l-4 border-transparent">
              <div className="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
            </div>
          </div>
          <div className="flex-auto rounded  border-gray-300">
            <div className="flex md:flex-row flex-col items-center">
              <div className="flex-auto">
                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-400"><span className="font-black">Step 3</span> - Planification</div>
                <div className="py-3 text-3xl text-white font">Fullstack Development</div>
                <div className=" text-gray-400">
                  Until now, you’ve built frontend & backend seperatly. Now it’s time to bring it all together with a ‘fullstack app’ (using frontend & backend together). In section 5, you will build your first ever full stack app that can be put in your resume!
                </div>
              </div>
              <div className="md:w-96 w-full p-5 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                  <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M47.16,21.221l-5.91,-0.966c-0.346,-1.186 -0.819,-2.326 -1.411,-3.405l3.45,-4.917c0.279,-0.397 0.231,-0.938 -0.112,-1.282l-3.889,-3.887c-0.347,-0.346 -0.893,-0.391 -1.291,-0.104l-4.843,3.481c-1.089,-0.602 -2.239,-1.08 -3.432,-1.427l-1.031,-5.886c-0.084,-0.478 -0.499,-0.828 -0.985,-0.828h-5.5c-0.49,0 -0.908,0.355 -0.987,0.839l-0.956,5.854c-1.2,0.345 -2.352,0.818 -3.437,1.412l-4.83,-3.45c-0.399,-0.285 -0.942,-0.239 -1.289,0.106l-3.887,3.887c-0.343,0.343 -0.391,0.883 -0.112,1.28l3.399,4.863c-0.605,1.095 -1.087,2.254 -1.438,3.46l-5.831,0.971c-0.482,0.08 -0.836,0.498 -0.836,0.986v5.5c0,0.485 0.348,0.9 0.825,0.985l5.831,1.034c0.349,1.203 0.831,2.362 1.438,3.46l-3.441,4.813c-0.284,0.397 -0.239,0.942 0.106,1.289l3.888,3.891c0.343,0.343 0.884,0.391 1.281,0.112l4.87,-3.411c1.093,0.601 2.248,1.078 3.445,1.424l0.976,5.861c0.079,0.481 0.496,0.834 0.985,0.834h5.5c0.485,0 0.9,-0.348 0.984,-0.825l1.045,-5.89c1.199,-0.353 2.348,-0.833 3.43,-1.435l4.905,3.441c0.398,0.281 0.938,0.232 1.282,-0.111l3.888,-3.891c0.346,-0.347 0.391,-0.894 0.104,-1.292l-3.498,-4.857c0.593,-1.08 1.064,-2.222 1.407,-3.408l5.918,-1.039c0.479,-0.084 0.827,-0.5 0.827,-0.985v-5.5c0.001,-0.49 -0.354,-0.908 -0.838,-0.987zM25,32c-3.866,0 -7,-3.134 -7,-7c0,-3.866 3.134,-7 7,-7c3.866,0 7,3.134 7,7c0,3.866 -3.134,7 -7,7z"></path></g></g>
                </svg>
              </div>
            </div>
          </div>
        </div>


        {/* step-6 */}
        <div className="flex items-start flex-row">
          <div className="border-t-4 border-r-4 border-transparent">
            <div className="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
          </div>
          <div className="border-t-4 border-transparent flex-auto">
            <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
          </div>
          <div className="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
        </div>
        <div className="flex flex-row-reverse">
          <div className="hidden md:flex flex-col items-center">
            <div className="w-32 py-5  border-gray-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
              <div className="text-3xl font-black text-gray-400">Step 6</div>
              <div className="text-gray-400 text-sm">FINISH</div>
            </div>
            <div className="h-full border-r-4 border-transparent">
              <div className="border-l-4 ml-4 h-full border-gray-300 border-dashed"></div>
            </div>
          </div>

          <div className="flex-auto  rounded  border-gray-300">
            <div className="flex md:flex-row flex-col items-center">
              <div className="flex-auto">
                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-400"><span className="font-black">Step 4</span> - Implementation</div>
                <div className="py-3 text-3xl text-white font">Finishing Touches</div>
                <div className=" text-gray-400">
                  If you want to stand out to employers & be an above average developer, you’ll want to learn about github, software architecture, & design principles. That’s exactly what you will learn in section 6.
                </div>
              </div>
              <div className="md:w-96 w-full p-5 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                  <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M17.791,46.836c0.711,-0.306 1.209,-1.013 1.209,-1.836v-5.4c0,-0.197 0.016,-0.402 0.041,-0.61c-0.014,0.004 -0.027,0.007 -0.041,0.01c0,0 -3,0 -3.6,0c-1.5,0 -2.8,-0.6 -3.4,-1.8c-0.7,-1.3 -1,-3.5 -2.8,-4.7c-0.3,-0.2 -0.1,-0.5 0.5,-0.5c0.6,0.1 1.9,0.9 2.7,2c0.9,1.1 1.8,2 3.4,2c2.487,0 3.82,-0.125 4.622,-0.555c0.934,-1.389 2.227,-2.445 3.578,-2.445v-0.025c-5.668,-0.182 -9.289,-2.066 -10.975,-4.975c-3.665,0.042 -6.856,0.405 -8.677,0.707c-0.058,-0.327 -0.108,-0.656 -0.151,-0.987c1.797,-0.296 4.843,-0.647 8.345,-0.714c-0.112,-0.276 -0.209,-0.559 -0.291,-0.849c-3.511,-0.178 -6.541,-0.039 -8.187,0.097c-0.02,-0.332 -0.047,-0.663 -0.051,-0.999c1.649,-0.135 4.597,-0.27 8.018,-0.111c-0.079,-0.5 -0.13,-1.011 -0.13,-1.543c0,-1.7 0.6,-3.5 1.7,-5c-0.5,-1.7 -1.2,-5.3 0.2,-6.6c2.7,0 4.6,1.3 5.5,2.1c1.699,-0.701 3.599,-1.101 5.699,-1.101c2.1,0 4,0.4 5.6,1.1c0.9,-0.8 2.8,-2.1 5.5,-2.1c1.5,1.4 0.7,5 0.2,6.6c1.1,1.5 1.7,3.2 1.6,5c0,0.484 -0.045,0.951 -0.11,1.409c3.499,-0.172 6.527,-0.034 8.204,0.102c-0.002,0.337 -0.033,0.666 -0.051,0.999c-1.671,-0.138 -4.775,-0.28 -8.359,-0.089c-0.089,0.336 -0.197,0.663 -0.325,0.98c3.546,0.046 6.665,0.389 8.548,0.689c-0.043,0.332 -0.093,0.661 -0.151,0.987c-1.912,-0.306 -5.171,-0.664 -8.879,-0.682c-1.665,2.878 -5.22,4.755 -10.777,4.974v0.031c2.6,0 5,3.9 5,6.6v5.4c0,0.823 0.498,1.53 1.209,1.836c9.161,-3.032 15.791,-11.672 15.791,-21.836c0,-12.682 -10.317,-23 -23,-23c-12.683,0 -23,10.318 -23,23c0,10.164 6.63,18.804 15.791,21.836z"></path></g></g>
                </svg>
              </div>
            </div>
          </div>
        </div>


        {/* step-7 */}
        <div className="flex items-start flex-row-reverse">
          <div className="border-t-4 border-l-4 border-transparent">
            <div className="w-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-b-4 rounded-br-full"></div>
          </div>
          <div className="border-t-4 border-transparent flex-auto">
            <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
          </div>
          <div className="w-16 mt-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-t-4 rounded-tl-full"></div>
        </div>

        <div className="flex flex-row">
          <div className="hidden md:flex flex-col items-center">
            <div className="w-32 py-5 border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
              <div className="text-3xl font-black text-gray-400">Step 7</div>
              <div className="text-gray-400 text-sm">JOB</div>
            </div>
          </div>
          <div className="flex-auto rounded  border-gray-300">
            <div className="flex md:flex-row flex-col items-center">
              <div className="flex-auto">
                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-400"><span className="font-black">Step 3</span> - Planification</div>
                <div className="py-3 text-3xl text-white font">Land a Job</div>
                <div className=" text-gray-400">
                  Until now, you’ve built frontend & backend seperatly. Now it’s time to bring it all together with a ‘fullstack app’ (using frontend & backend together). In section 5, you will build your first ever full stack app that can be put in your resume!
                </div>
              </div>
              <div className="md:w-96 w-full p-5 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-20 h-20 text-white">
                  <path fill-rule="evenodd" d="M6 3.75A2.75 2.75 0 0 1 8.75 1h2.5A2.75 2.75 0 0 1 14 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 0 1 6 4.193V3.75Zm6.5 0v.325a41.622 41.622 0 0 0-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25ZM10 10a1 1 0 0 0-1 1v.01a1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H10Z" clip-rule="evenodd" />
                  <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 0 1-9.274 0C3.985 17.585 3 16.402 3 15.055Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>



      </div>

    </section >
  )
}

export default Steps