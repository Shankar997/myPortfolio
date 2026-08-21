import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { FeaturedProject } from "@/components/sections/featured-project";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { Certifications } from "@/components/sections/certifications";
import { StatsBand } from "@/components/sections/stats-band";
import { Blog } from "@/components/sections/blog";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      {/* <FeaturedProject /> */}
      <Services />
      <Process />
      <StatsBand />
      {/* <Testimonials /> */}
      {/* <Certifications /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
