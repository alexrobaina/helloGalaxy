import { CallToAction } from '@/components/CallToAction';
import { Hero } from '@/components/Hero';
import { SolutionShowcase } from '@/components/SolutionShowcase';
import { Projects } from '@/components/Projects';
import { Footer } from '@/components/Footer';
import { TerminalAI } from '@/components/TerminalAI';

export default function Home() {
  return (
    <>
      <Hero />

      <SolutionShowcase />

      <Projects />

      <TerminalAI />

      <Footer />
      
      <CallToAction />
    </>
  );
}
