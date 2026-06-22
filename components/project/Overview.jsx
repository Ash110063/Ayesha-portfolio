export default function Overview({ project}) {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 ">
        <div className="max-w-4xl space-y-6">
          <h2 className="text-xs uppercase tracking-widest font-bold text-white/50">{project.overview.heading}</h2>
          <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed tracking-wide">{project.overview.description1}</p>
          <p className="text-sm md:text-base text-white/50 leading-relaxed max-w-3xl">{project.overview.description2}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          {project?.challengeAndApproach?.map((item, index) => (
            <div key={index} className="p-8 md:p-10 rounded-[24px] bg-[#0d0d0d] border border-white/5">
              <h3 className="text-lg font-bold text-white tracking-tight">{item.title}</h3>
              <p className="text-sm md:text-base text-white/50 leading-relaxed font-light">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}