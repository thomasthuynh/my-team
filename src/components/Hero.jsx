import bgPatternHome2 from "../assets/patterns/bg-pattern-home-2.svg";

const Hero = () => {
  return (
    <header className="bg-green-midnight relative mt-[7rem] h-[calc(100vh-7rem)]">
      <div className="mx-auto flex w-[90%] max-w-7xl flex-col items-center justify-center py-12 text-center text-white">
        <h1 className="text-[2.5rem] leading-[2.5rem] font-bold">
          Find the <br />
          best <span className="text-coral-light">talent</span>
        </h1>
        <p className="w-[95%] pt-6 text-[0.9375rem] leading-[1.75rem] font-semibold">
          Finding the right people and building high performing teams can be
          hard. Most companies aren't tapping into the abundance of global
          talent. We're about to change that.
        </p>
      </div>
      {/* Background Pattern */}
      <div className="absolute bottom-0 z-0 w-full">
        <img src={bgPatternHome2} alt="Pattern" className="mx-auto" />
      </div>
    </header>
  );
};

export default Hero;
