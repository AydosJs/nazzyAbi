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

        <div>
          <input
            placeholder="Your email"
            type="text"
            className="p-5 border bg-transparent backdrop-filter backdrop-blur-sm border-white rounded-full outline-none w-96"
          />
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
