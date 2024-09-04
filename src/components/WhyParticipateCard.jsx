const WhyParticipateCard = ({ item }) => {
  return (
    <div className="p-8 mb-4 space-y-2 border border-transparent rounded-md cursor-pointer break-inside bg-custom-light/5 hover:border-custom-light hover:-rotate-1">
      <img
        src={item.imgSrc}
        alt={item.title}
        className="p-2 rounded-sm w-fit"
      />
      <h4 className="font-poppins font-[600] text-[24px]">{item.title}</h4>
      <p className="font-poppins font-[500] text-[16px] text-gray-400">
        {item.description}
      </p>
    </div>
  );
};

export default WhyParticipateCard;
