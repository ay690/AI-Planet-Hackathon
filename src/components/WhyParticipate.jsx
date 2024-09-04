import WhyParticipateCard from "./WhyParticipateCard";
import { items } from "../data/WhyParticipate";

const WhyParticipate = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto space-y-16">
        <h2 className="font-poppins font-[600] text-[24px]">
          Why participate in{" "}
          <span className="text-custom-green">AI challenges?</span>
        </h2>
        <div className="grid grid-cols-2 gap-10">
          {items.map((item) => (
            <WhyParticipateCard item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyParticipate;
