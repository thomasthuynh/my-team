import bgPatternHome3 from "../assets/patterns/bg-pattern-home-3.svg";
import { benefits } from "../constants/home.js";

const Features = () => {
  return (
    <section className="bg-green-sacramento relative overflow-hidden">
      <div className="mx-auto w-[90%] max-w-7xl">
        <div className="flex">
          <div className="w-[15rem] pt-16">
            <div className="bg-coral-light h-[0.25rem] w-[3rem]"></div>
            <h2 className="pt-8 text-[2rem] leading-[2rem] font-bold text-white">
              Build & manage distributed teams like no one else.
            </h2>
          </div>
          {/* Background Pattern */}
          <div className="absolute -right-[6.25rem]">
            <img src={bgPatternHome3} alt="Pattern" />
          </div>
        </div>

        {/* Benefits */}
        <ul className="py-16">
          {benefits.map((benefit, i) => (
            <li key={i} className="flex flex-col items-center">
              <div>
                <img src={benefit.icon} alt={benefit.title} />
              </div>
              <div className="pt-4 pb-12 text-center">
                <h3 className="text-coral-light pb-2 text-lg font-bold">
                  {benefit.title}
                </h3>
                <p className="text-gray text-[0.9375rem] font-semibold">
                  {benefit.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
