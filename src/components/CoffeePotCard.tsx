import { Link } from "react-location";
import styled from "styled-components";

import { CoffeePot } from "../types";
import icon from "../assets/coffee-pot.png";

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: var(--color-text);
  padding: 0.5rem;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  max-width: 12rem;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 1.5rem;
  line-height: 1;
  margin: 0;
  text-align: center;
  font-weight: bold;
`;

const CoffeePotCard: React.FC<CoffeePot> = ({ name, id }) => {
  return (
    <StyledLink to={`pots/${id}`}>
      <Img src={icon} alt={name} />
      <Title>{name}</Title>
    </StyledLink>
  );
};

export default CoffeePotCard;
