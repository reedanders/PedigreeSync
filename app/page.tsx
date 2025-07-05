import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/landing/Hero";
import { Roadmap } from "@/components/landing/Roadmap";
import { HeroBlurb } from "@/components/landing/HeroBlurb";

export default function Home() {
  return (
    <Container className="py-0 md:py-4">
      <Hero />
      <div id="partners">
        <HeroBlurb />
      </div>
      <div id="roadmap">
        <Roadmap />
      </div>
    </Container>
  );
}