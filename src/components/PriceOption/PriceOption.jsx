import Features from "../Features/Features";

const PriceOption = ({ option }) => {
  const { price, name, features } = option;
  return (
    <div className="bg-cyan-600  p-6 text-white flex flex-col rounded-lg mt-5">
      <h2 className="text-center">
        <span className=" font-extrabold text-7xl">{price}</span>
        <span className="text-3xl">/mon</span>
      </h2>
      <h4 className="text-4xl text-center font-bold my-3">{name}</h4>
      <div className="flex-grow">
        {features.map((feature) => (
          <Features feature={feature}></Features>
        ))}
      </div>

      <button className="bg-cyan-800 w-full p-3 rounded-lg hover:bg-cyan-950">
        Buy Now
      </button>
    </div>
  );
};

export default PriceOption;
