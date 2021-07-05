import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1a1919;
  color: #fffffe;
  width: 80%;
  border-radius: 5px;
  margin-top: 2rem;
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
