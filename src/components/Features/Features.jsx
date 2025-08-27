import { AiFillCheckCircle } from "react-icons/ai";
const Features = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center">
        <AiFillCheckCircle className="mr-2"></AiFillCheckCircle> {feature}
      </p>
    </div>
  );
};

export default Features;
