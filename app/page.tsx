import Different from "./components/Different";
import Faq from "./components/Faq";
import Steps from "./components/Steps";
import Spotlight from "./components/ui/Spotlight";
import { TextGenerateEffect } from "./components/ui/TextGenerateEffect";

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col px-60">

      <div className="flex items-center flex-col space-y-10 min-h-[calc(100vh-85px)] justify-center">

        <Spotlight
          className="-top-40 left-0 md:left-80 md:-top-20"
          fill="white"
        />

        <div>
          <TextGenerateEffect delay={0.4} words={'Learn. Build. Grow.'} className="text-7xl font-bold text-center mb-2" />
          <p className="transition-all duration-300 ease-in-out delay-150 text-xl text-center font-normal text-gray-400">
            The ultimate roadmap to learning code, best practices, and modern
            day technologies.
          </p>
        </div>

        <div className="relative group">
          <input
            placeholder="Your email"
            type="text"
            className="p-5 border pr-14 border-white border-opacity-20 bg-white bg-opacity-10 rounded-full outline-none w-96 "
          />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="absolute w-8 h-8 top-1/2 transition-all -translate-y-1/2 right-4 bg-opacity-20 cursor-pointer bg-white opacity-50 group-hover:opacity-100 text-white p-1 rounded-full">
            <path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>

      <section className="mb-32">
        <Different />
      </section>

      <section className="mb-32">
        <Steps />
      </section>

      <section className="w-full mb-20 mt-10">
        <Faq />
      </section>

    </main>
  );
}
