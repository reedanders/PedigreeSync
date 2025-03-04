import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { DemoDashboard } from '@/components/DemoDashboard';
// import { SectionTitle } from "@/components/SectionTitle";
// import { Benefits } from "@/components/Benefits";
// import { Video } from "@/components/Video";
// import { Testimonials } from "@/components/Testimonials";
// import { Faq } from "@/components/Faq";
// import { Cta } from "@/components/Cta";

// import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <DemoDashboard />
    </Container>
  );
}