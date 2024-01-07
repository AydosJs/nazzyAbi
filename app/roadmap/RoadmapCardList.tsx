'use client'
import Link from "next/link"
import { useState } from "react";

interface TodoItem {
  id: number,
  title: string,
  des: string;
  links: string[],
  checked: boolean,
}

const RoadmapCardList = () => {

  const [todos, setTodos] = useState<TodoItem[]>([
    {
      id: 1,
      title: 'Basics of Programming',
      des: "Learn the basics of programming & how computers work",
      links: [
        'https://youtu.be/zOjov-2OZ0E',
        'https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science?utm_source=google&utm_campaign=19315581336&utm_medium=cpc&utm_term=cs50&hsa_acc=7245054034&hsa_cam=19315581336&hsa_grp=144242542723&hsa_ad=642052609431&hsa_src=g&hsa_tgt=kwd-296840910&hsa_kw=cs50&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAiA9dGqBhAqEiwAmRpTC1knf9hYdaVMlE5mOdfTYfbbCW1kFNlkMka0vZ0XDe-kCGTsRW3HMRoCq9wQAvD_BwE'
      ],
      checked: false
    },
    {
      id: 2,
      title: 'HTML & CSS',
      des: 'It is time to learn the basics of web development using the building blocks of the web (HTML & CSS).',
      links: [
        'https://www.freecodecamp.org/learn/2022/responsive-web-design/',
        'https://youtu.be/RGOj5yH7evk',
        'https://youtu.be/p0bGHP-PXD4'
      ],
      checked: false,
    },
    {
      id: 3,
      title: 'JavaScript | Data Structures',
      des: 'It is time to get functional! Learn JavaScript & how to use it to make your websites interactive.',
      links: [
        'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
        'https://youtu.be/PkZNo7MFNFg',
      ],
      checked: false,
    },
    {
      id: 4,
      title: 'Frameworks',
      des: 'Learn how to use JavaScript frameworks to build better & faster websites.',
      links: [
        'https://fullstackopen.com/en/',
        'https://youtu.be/b9eMGE7QtTk',
        'https://youtu.be/wm5gMKuwSYk',
        'https://youtu.be/pUNSHPyVryU'
      ],
      checked: false,
    },
    {
      id: 5,
      title: 'Backend | APIs',
      des: 'Make your websites dynamic by learning how to build servers, user profiles, APIs & more.',
      links: [
        'https://www.youtube.com/watch?si=tN6vQG1kF_dlnd2h&v=ofme2o29ngU&feature=youtu.be',
        'https://youtu.be/SccSCuHhOw0',
        'https://www.freecodecamp.org/learn/back-end-development-and-apis/',
        'https://youtu.be/Agw0LdW9xB4'
      ],
      checked: false,
    },
    {
      id: 6,
      title: 'Full Stack Development',
      des: 'Learn how to connect the frontend & backend by creating functioning full stack applications!',
      links: [
        'https://youtu.be/7CqJlxBYj-M',
        'https://youtu.be/0osXx2oJu44',
        'https://youtu.be/-42K44A1oMA'
      ],
      checked: false,
    },
    {
      id: 7,
      title: 'Finishing Touches',
      des: 'Learn how software design, github, & other software principles work.',
      links: [
        'https://youtu.be/FLtqAi7WNBY',
        'https://youtu.be/tv-_1er1mWI',
        'https://youtu.be/RGOj5yH7evk'
      ],
      checked: false,
    },
    {
      id: 8,
      title: 'Interview Prep',
      des: 'Learn how to prepare for interviews & get a job as a developer!',
      links: [
        'https://youtu.be/Xg9ihH15Uto',
        'https://youtu.be/1qw5ITr3k9E',
        'https://youtu.be/5uhmS8nzxM4'
      ],
      checked: false,
    }
  ]);

  const handleCheck = (id: number) => {
    setTodos((prevTodos: TodoItem[]) => prevTodos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
  };

  return (
    <>
      {todos.map((item, index) => (
        <div
          key={item.id}
          onClick={() => handleCheck(item.id)}
          className={`min-h-[226px] group relative flex flex-col cursor-pointer space-y-6 border border-neutral-800 backdrop-blur-[1px] backdrop-filter bg-white ${!item.checked ? 'bg-opacity-5 ' : 'bg-opacity-10'} p-4 sm:p-6 rounded-md overflow-hidden bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.4)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat hover:bg-[position:200%_0,0_0] hover:duration-[1000ms]`}
        >
          <div className="min-h-[82px]">
            <h1 className='text-xl sm:text-2xl mb-1'>
              {++index}.&nbsp;
              {item.title}
            </h1>
            <p className='text-neutral-500 text-md sm:text-md'>
              {item.des}
            </p>
          </div>

          <div className={
            `flex flex-col divide-y divide-neutral-700
            ${item.checked ? 'opacity-60 group-hover:opacity-100' : 'opacity-100'}
            `
          }>
            <h1 className="text-lg mb-3">Links:</h1>
            {item.links.map((item, index) => (
              <Link key={index} target="blank" className="py-3 truncate hover:border-neutral-400 text-blue-500 hover:bg-white hover:bg-opacity-5"
                href={item}
              >
                <span className="inline-bock text-neutral-500 mr-2">&#x2022;</span>
                {item}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default RoadmapCardList

{/* <div className="flex flex-row items-center justify-between">
        <span className='text-3xl'>1</span>
      </div> */}


{/* <div className='flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-2'>
      <div className='hover:border-neutral-400 sm:w-1/2 border border-neutral-800 rounded-md bg-white bg-opacity-10'>
        <Link href={'https://youtu.be/zOjov-2OZ0E'} target='blank'
          className='flex p-5 items-center justify-center '>
          <svg className='w-8 h-8' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
            <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
          </svg>
        </Link>
      </div>
      <div className='hover:border-neutral-400 sm:w-1/2 border border-neutral-800 rounded-md bg-white bg-opacity-10'>
        <Link target='blank' href={'https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science?utm_source=google&utm_campaign=19315581336&utm_medium=cpc&utm_term=cs50&hsa_acc=7245054034&hsa_cam=19315581336&hsa_grp=144242542723&hsa_ad=642052609431&hsa_src=g&hsa_tgt=kwd-296840910&hsa_kw=cs50&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAiA9dGqBhAqEiwAmRpTC1knf9hYdaVMlE5mOdfTYfbbCW1kFNlkMka0vZ0XDe-kCGTsRW3HMRoCq9wQAvD_BwE'}
          className='flex p-5 items-center justify-center '>
          <img className='w-8 h-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/1200px-Harvard_University_coat_of_arms.svg.png" alt="no image" />
        </Link>
      </div>
    </div> */}