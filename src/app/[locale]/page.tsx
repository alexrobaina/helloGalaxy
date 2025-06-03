import { CallToAction } from '@/components/CallToAction';
import { Hero } from '@/components/Hero';
import { SolutionShowcase } from '@/components/SolutionShowcase';
import { Projects } from '@/components/Projects';
import { LogoCarrousel } from '@/components/LogoCarrousel';
import { Footer } from '@/components/Footer';
import { TerminalAI } from '@/components/TerminalAI';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
 
      <Hero />

      <LogoCarrousel />

      <SolutionShowcase />

      <Projects />

      <TerminalAI />

      <Footer />
      
      <CallToAction />
    </>
  );
}
