const PlanCard = (props) => {
  const { city_name, resource_name, attraction } = props;
  return (
    <div>
      <p>{city_name}</p>
      <p>{resource_name}</p>
      <p>{attraction}</p>
    </div>
  );
};

export default PlanCard;
