import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AudienceSplit } from '@/components/AudienceSplit';
import { PainPoints } from '@/components/PainPoints';
import { SolutionShowcase } from '@/components/SolutionShowcase';
import { Process } from '@/components/Process';
import { Projects } from '@/components/Projects';
import { LogoCarrousel } from '@/components/LogoCarrousel';
import { TerminalAI } from '@/components/TerminalAI';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { CallToAction } from '@/components/CallToAction';

/**
 * Landing narrative, in the order a visitor makes a decision:
 * who we are (Hero) -> is this for me (AudienceSplit) -> do they get my
 * problem (PainPoints) -> what exactly do they do (SolutionShowcase) ->
 * how does it work (Process) -> can they prove it (Projects, LogoCarrousel,
 * TerminalAI) -> how do I start (Contact).
 */
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <AudienceSplit />
        <PainPoints />
        <SolutionShowcase />
        <Process />
        <Projects />
        <LogoCarrousel />
        <TerminalAI />
        <Contact />
      </main>

      <Footer />

      {/* Reserves the space the fixed contact bar overlays. */}
      <div aria-hidden className="h-[4.5rem]" />
      <CallToAction />
    </>
  );
}
