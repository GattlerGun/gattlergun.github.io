
import { Header } from "@/app/ui/header";
import { Skills } from "./ui/skills/skills";
import { Projects } from "./ui/projects/projects";
import { Footer } from "./ui/footer";


export default function Page() {
  return (
    <main>
      <Header />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
