import { CallToAction } from '@/components/CallToAction';
import { Hero } from '@/components/Hero';
// import { InteractiveDemo } from '@/components/InteractiveDemo';
// import { PainPointsBlock } from '@/components/PainPointsBlock';
// import { Pricing } from '@/components/Pricing';
import { SolutionShowcase } from '@/components/SolutionShowcase';
import { Projects } from '@/components/Projects';
import { Footer } from '@/components/Footer';
import { TerminalAI } from '@/components/TerminalAI';
import { WorkExperience } from '@/components/WorkExperience';

export default function Home() {
  return (
    <>
      <Hero />

      <WorkExperience />
      {/* <PainPointsBlock /> */}

      <SolutionShowcase />

      <Projects />

      {/* <InteractiveDemo /> */}

      {/* <SocialProof />

      <FeatureHighlight /> */}

      {/* <Pricing /> */}


      <TerminalAI />

      <Footer />
      
      <CallToAction />
    </>
  );
}
