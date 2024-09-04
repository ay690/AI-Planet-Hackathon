import WhyParticipateCard from "./WhyParticipateCard";
import { items } from "../data/WhyParticipate";

const WhyParticipate = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl px-4 mx-auto space-y-12">
        <h2 className="font-poppins font-[600] text-[24px] text-center">
          Why participate in{" "}
          <span className="text-custom-green">AI challenges?</span>
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
          {items.map((item) => (
            <WhyParticipateCard item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyParticipate;
