import { Metadata } from "next";
import { Projects } from "../ui/projects/projects";

export const metadata: Metadata = {
    title: `Projects | Alexey Rybkin`,
    description: "It,s my project",
};

export default function Page() {
    return (
        <Projects />
    )
}