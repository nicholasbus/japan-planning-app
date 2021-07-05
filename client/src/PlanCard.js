import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: 1px solid black;
  background-color: #333;
  color: #fff;
  width: 80%;
`;

const PlanCard = (props) => {
  const { city_name, resource_name, attraction } = props;
  return (
    <Card>
      <p>{city_name}</p>
      {/* <p>{resource_name}</p>
      <p>{attraction}</p> */}
    </Card>
  );
};

export default PlanCard;
