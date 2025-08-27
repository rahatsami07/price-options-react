import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic",
      price: 1200,
      features: [
        "Unlimited access to cardio machines",
        "Access to weightlifting area",
        "Locker facility",
        "Free water station",
        "Free Wi-Fi",
        "Open 6 days a week",
        "Basic fitness assessment",
      ],
    },
    {
      id: 2,
      name: "Standard",
      price: 2000,
      features: [
        "Unlimited access to all equipment",
        "Locker & shower facility",
        "One free personal training session per month",
        "Access to group fitness classes",
        "Free Wi-Fi",
        "Nutritional guidance (monthly)",
        "Open 7 days a week",
        "Priority booking for classes",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 3500,
      features: [
        "Unlimited access to all gym areas",
        "Locker & premium shower facility",
        "Weekly personal training sessions",
        "Access to all group fitness classes",
        "Free gym merchandise (t-shirt, towel)",
        "Monthly body composition analysis",
        "Sauna & steam room access",
        "Nutritional plan tailored by trainer",
        "Priority support & assistance",
        "Exclusive premium member events",
      ],
    },
    {
      id: 4,
      name: "Student Package",
      price: 1000,
      features: [
        "Access to gym equipment (off-peak hours)",
        "Locker facility",
        "Student ID required",
        "Free water station",
        "Basic fitness guidance",
        "Discounted group class entry",
        "Free Wi-Fi",
        "Exam season flexible hold option",
      ],
    },
    {
      id: 5,
      name: "Couples Membership",
      price: 5500,
      features: [
        "Full access for two members",
        "Locker & shower facility",
        "Free fitness assessment for both",
        "Access to group classes",
        "Discount on personal training packages",
        "Free couple workout plan",
        "Monthly progress tracking",
        "Weekend guest passes for friends",
      ],
    },
  ];

  return (
    <div className="m-10">
      <h2 className="text-3xl">
        {priceOptions.length} Best Prices Gym In This Town
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.key} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
