import Image from "next/image";
import summaryData from "@/data/summary.json";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-48 h-48 rounded-full overflow-hidden bg-cyan-400 shrink-0">
            <Image
              src="/profile.jpeg"
              alt="Profile"
              width={192}
              height={192}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {summaryData.heading}
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
              {summaryData.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
