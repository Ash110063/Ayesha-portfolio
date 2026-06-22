export default function DesignProcess({ project }) {
  return (
    <section className="bg-black text-white ">
      <div className="max-w-7xl mx-auto space-y-12 py-20 px-6">
        <div className="space-y-3 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{project.designProcess.heading}</h2>
          <p className="text-sm text-white/50 leading-relaxed">{project.designProcess.subheading}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {project?.designProcess?.steps?.map((step, idx) => (
            <div key={idx} className="p-6 rounded-[20px] bg-[#0d0d0d] border border-white/5 flex flex-col space-y-5">
              <h4 className="text-xs font-bold tracking-wider text-white border-b border-white/10 pb-3">{step.num}</h4>
              <ul className="space-y-3 flex-1">
                {step.items.map((bullet, bIdx) => (
                  <li key={bIdx} className="text-xs md:text-[13px] text-white/50 leading-relaxed flex items-start space-x-2">
                    <span className="text-white/30 mt-1.5 shrink-0 block w-1 h-1 rounded-full bg-white" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}