export default function Hero({ project }) {
  return (
    <section className="relative w-full bg-[#030303] text-white select-none">
      {/* SECTION 1: Full Screen Hero Box Banner (Pehle Screen Par Yeh Dikhega) */}
      <div className="relative w-full  flex flex-col items-center justify-end px-4 overflow-hidden pb-5 py-50">
        <div className="absolute inset-0 z-0 w-full !h-full bg-cover">
          <img
            src={project?.heroBg}
            alt="Hero Background"
            className="w-full !h-full object-cover bg-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply h-full" />
        </div>
        <h1 className="relative text-[60px] md:text-[80px] lg:text-[150px] font-black tracking-wider text-white/70 uppercase text-center leading-none z-10 pointer-events-none select-none ">
          {project?.title}
        </h1>
        <img
            src={project?.heroImage}
            alt="Dashboard Core Showcase"
            className="w-[400px] h-[300px] lg:w-[700px] lg:h-[300px] object-contain z-20 mt-4 md:-mt-4 lg:-mt-10"
          />
      </div>

      {/* SECTION 2: Spacing & Metadata Component (Scroll Karne Par Niche Yeh Aayega) */}
      {/* Mockup bottom pull bleed ke gap ko level karne ke liye responsive padding use ki hai */}
      <div className=" pb-16 bg-black relative z-30">
        <div className="max-w-7xl mx-auto px-6 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-10">
            {project?.meta?.map((item, index) => (
              <div
                key={index}
                className="space-y-2 p-5 rounded-[16px] bg-[#0d0d0d] border border-white/5 hover:border-white/10 transition-colors duration-300"
              >
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold block">
                  {item.label}
                </span>
                <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
