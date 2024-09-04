import { items } from "../data/Statistics";

const Statistics = () => {
  return (
    <section className="py-16 bg-custom-dark">
      <div className="grid max-w-6xl grid-cols-3 mx-auto divide-x">
        {items.map((item) => (
          <div
            className="flex items-center justify-center space-x-4 first:justify-start last:justify-end"
            key={item.number}
          >
            <div className="p-4 rounded-sm">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="object-contain w-full h-full"
              />
            </div>
            <div>
              <h4 className="text-white font-inter font-[700] text-[24px]">
                {item.number}
              </h4>
              <p className="text-white font-inter font-[500] text-[16px]">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
