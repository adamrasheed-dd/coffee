import styled from "styled-components";

import { Highlight } from "../styled";
import useCoffeePots from "../hooks/useCoffeePots";
import CoffeePotCard from "../components/CoffeePotCard";

const CoffeePotContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin: 10vh auto;
`;

const Home: React.FC = () => {
  const { coffeePots, isLoading, error } = useCoffeePots();

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return (
    <div>
      <Highlight>Is there coffee?</Highlight>
      {isLoading ? (
        <p>Is Loading</p>
      ) : (
        <div>
          <h2>Select a Pot</h2>
          <CoffeePotContainer>
            {coffeePots.map((coffeePot) => (
              <CoffeePotCard key={coffeePot.id} {...coffeePot} />
            ))}
          </CoffeePotContainer>
        </div>
      )}
    </div>
  );
};
export default Home;
