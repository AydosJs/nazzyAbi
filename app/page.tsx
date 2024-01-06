import Different from "./components/Different";
import Faq from "./components/Faq";
import HeroSectionWithEmailSignup from "./components/HeroSectionWithEmailSignup";
import Steps from "./components/Steps";

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col sm:px-60">

      <section>
        <HeroSectionWithEmailSignup />
      </section>

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
