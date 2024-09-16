import About from "@/components/about";
import Awards from "@/components/awards";
import Guidelines from "@/components/guidelines";
import Hero from "@/components/hero";
import Team from "@/components/team";
import Timeline from "@/components/timeline";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Timeline />
      <Guidelines />
      <Awards />
      <Team />
    </main>
  );
}
