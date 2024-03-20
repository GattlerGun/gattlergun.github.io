
import { Header } from "@/app/ui/header";
import { Skills } from "./ui/skills/skills";
import { Projects } from "./ui/projects/projects";


export default function Page() {
  return (
    <main className="main">
      <Header />
      <Skills />
      <Projects />
    </main>
  );
}
