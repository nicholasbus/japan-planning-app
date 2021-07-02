import { useState, useEffect } from "react";
import PlanCard from "./PlanCard";

const mockPlans = [
  {
    city_name: "Osaka",
    attraction: "Okonomiyaki",
    resource_name: "https://youtu.be/6Oajl8PCWKQ",
  },
  {
    city_name: "Kobe",
    attraction: "BEEF",
    resource_name: "https://youtu.be/IuYiYzmO3qk",
  },
];

const Home = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    setPlans(mockPlans);
  }, []);

  return (
    <>
      {plans.map((plan, idx) => {
        return (
          <PlanCard
            key={idx}
            city_name={plan.city_name}
            attraction={plan.attraction}
            resource_name={plan.resource_name}
          />
        );
      })}
    </>
  );
};

export default Home;
