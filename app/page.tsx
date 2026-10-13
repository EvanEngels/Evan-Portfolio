import Image from "next/image";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <Spacing size="sm" />
        <Hero />
      </main>
    </div>
  );
}
