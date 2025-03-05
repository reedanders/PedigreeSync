import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/layout/Hero";
import { DemoDashboard } from '@/components/demo/DemoDashboard';

export default function Home() {
  return (
    <Container>
      <Hero />
      <DemoDashboard />
    </Container>
  );
}