import { CallToAction } from '@/components/CallToAction';
import { FeatureHighlight } from '@/components/FeatureHighlight';
import { Hero } from '@/components/Hero';
import { InteractiveDemo } from '@/components/InteractiveDemo';
import { PainPointsBlock } from '@/components/PainPointsBlock';
import { Pricing } from '@/components/Pricing';
import { SocialProof } from '@/components/SocialProof';
import { SolutionShowcase } from '@/components/SolutionShowcase';
import { TerminalAI } from '@/components/TerminalAI';

export default function Home() {
  return (
    <>
      <Hero />

      <TerminalAI />
      {/* <PainPointsBlock /> */}

      <SolutionShowcase />

      {/* <InteractiveDemo /> */}

      <SocialProof />

      <FeatureHighlight />

      {/* <Pricing /> */}

      {/* <CallToAction /> */}
    </>
  );
}
