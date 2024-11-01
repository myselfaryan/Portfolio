//page.tsx

"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav, Logo } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-background-100 bg-gradient-100 font-pt flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Logo />
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;