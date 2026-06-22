// // app/portfolio/go-logistics/page.jsx
// "use client";

// import Hero from "@/components/project/Hero";
// import Overview from "@/components/project/Overview";
// import DesignProcess from "@/components/project/DesignProcess";
// import ShowcaseUI from "@/components/project/ShowcaseUI";
// import Navbar from "../../../components/Navbar";
// import Footer from "../../../components/Footer";

// export default function page() {
//   return (
//     <main className="w-full bg-black min-h-screen antialiased selection:bg-white/20">
//     <Navbar />
//       <Hero />
//       <Overview />
//       <DesignProcess />
//       <ShowcaseUI />
//       <Footer />
//     </main>
//   );
// }


// app/portfolio/[slug]/page.jsx
"use client";

import { use } from "react";
import Hero from "@/components/project/Hero";
import Overview from "@/components/project/Overview";
import DesignProcess from "@/components/project/DesignProcess";
import ShowcaseUI from "@/components/project/ShowcaseUI";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { projectData } from "@/data/projectData";

export default function Page({ params: paramsPromise }) {
  // Params ko unwrap karein dynamic slug nikalne ke liye
  const params = use(paramsPromise);
  const currentSlug = params.slug;

  // Sahi project data find karein slug ke mutabiq
  const project = projectData[currentSlug];

  // Agar project na mile to page crash na ho, generic text handle ho jaye
  if (!project) {
    return (
      <div className="w-full h-screen bg-black text-white flex items-center justify-center">
        <p className="text-xl">Project Not Found</p>
      </div>
    );
  }

  return (
    <main className="">
      <Navbar />
      
      {/* Har component ko uska required targeted data pass karwa diya */}
      <Hero project={project} />
      <Overview project={project} />
      <DesignProcess project={project} />
      <ShowcaseUI project={project} />
      <Footer />
    </main>
  );
}