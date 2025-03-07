import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/layout/Hero";
import { DemoDashboard } from '@/components/demo/DemoDashboard';

export default function Home() {
  return (
    <Container className="py-0 md:py-4">
      <Hero />
      <DemoDashboard />
    </Container>
  );
}