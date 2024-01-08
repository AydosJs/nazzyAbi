import Accordion from "@/components/ui/Accordion"

const FAQ = () => {
  return (
    <>
      <h1 className="font-semibold text-5xl text-white mb-8">FAQ&apos;s</h1>
      <div className="flex flex-col space-y-4">
        <Accordion title="How long will it take to finish?" content="It depends on how much time you put in! If you put in 2-4 hours a day, you can finish in 6 months. If you put in 1 hour a day, you can finish in 9 months." />
        <hr className=" border-neutral-700" />
        <Accordion title="What will I learn?" content="As this is a web development roadmap, you will learn how to build websites & web applications. You will learn the basics of programming, HTML, CSS, JavaScript, Typescript, React.JS, Next.JS, Node.JS, Git, & more!" />
        <hr className=" border-neutral-700" />
        <Accordion title="What is the SD Method?" content="The SD Method (Software Developer Method) is a project based way of learning how to code. Rather than simply reading books or watching videos on code, you will learn by building projects that can be put on your resume & portfolio." />
        <hr className=" border-neutral-700" />
        <Accordion title="How much will it cost?" content="Every. Single. Lesson. Is. Free. You can learn how to code without spending a single penny on content!" />
      </div>
    </>
  )
}

export default FAQ