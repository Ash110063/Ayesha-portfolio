// export default function ShowcaseUI({ project }) {
//   return (
//     <section className="relative w-full min-h-[60vh] md:min-h-[90vh] bg-neutral-950 flex items-center justify-center p-6 md:p-12 overflow-hidden">
//       {/* Dynamic Background Layout Image Setup */}
//         <div className="absolute inset-0 z-0 h-full">
//           <img
//             src={project?.showcaseImages.showcaseBg}
//             alt="Hero Background"
//             className="w-full !h-full object-cover opacity-80"
//           />
//           {/* Subtle overlay screen contrast cover blending */}
//           <div className="absolute inset-0 bg-black/40 mix-blend-multiply h-full" />
//         </div>
//       <div className="relative w-full max-w-6xl z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.5fr] items-center justify-center gap-4 md:gap-6 md:gap-8">
//         <div className="flex justify-center items-center gap-2">
//           <img src={project?.showcaseImages?.mobile1} alt="Mobile View 1" className="w-20 md:w-full h-auto" />
//           <img src={project?.showcaseImages?.mobile1} alt="Mobile View 2" className="w-20 md:w-full h-auto" />
//         </div>
        
//         <div className="w-full overflow-hidden drop-shadow-2xl  md:mt-0">
//           <img src={project?.showcaseImages?.desktop} alt="Desktop View" className="w-full h-auto" />
//         </div>
//       </div>
//     </section>
//   );
// }




export default function ShowcaseUI({ project }) {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[90vh] bg-neutral-950 flex items-center justify-center p-6 md:p-12 overflow-hidden">
      {/* Dynamic Background Layout Image Setup */}
        <div className="absolute inset-0 z-0 h-full">
          <img
            src={project?.showcaseImages.showcaseBg}
            alt="Hero Background"
            className="w-full !h-full object-cover opacity-80"
          />
          {/* Subtle overlay screen contrast cover blending */}
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply h-full" />
        </div>
      <div className="relative w-full max-w-6xl z-10  items-center justify-center gap-4 md:gap-6 md:gap-8">
        <div className="flex justify-center items-center gap-2">
          <img src={project?.showcaseImages?.mobile1} alt="Mobile View 1" className="w-full h-auto" />
          {/* <img src={project?.showcaseImages?.mobile1} alt="Mobile View 2" className="w-20 md:w-full h-auto" /> */}
        </div>
        
        {/* <div className="w-full overflow-hidden drop-shadow-2xl  md:mt-0">
          <img src={project?.showcaseImages?.desktop} alt="Desktop View" className="w-full h-auto" />
        </div> */}
      </div>
    </section>
  );
}