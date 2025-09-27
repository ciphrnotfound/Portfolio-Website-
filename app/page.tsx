import Image from "next/image";
import Hero from "@/components/Hero";
import {FloatingNav} from "@/ui/FloatingNavbar";
import {FaHome} from "react-icons/fa";
import Grid from "@/components/Grid";
import ProjectsSection from "@/components/RecentProject";
import {navItems} from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/MyApproach";
import FootArea from "@/components/Footer";
export default function Home() {
  return (
   <>
    <main className={`relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5`}>
        <div className={`max-w-7xl w-full`}>
            <FloatingNav navItems={navItems}
            />
           <Hero/>
            <Grid/>
            <ProjectsSection/>
            <Clients/>
            <Experience/>
            <Approach/>
            <FootArea/>
        </div>

    </main>
   </>
  );
}
