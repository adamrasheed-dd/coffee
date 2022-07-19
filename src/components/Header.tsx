import { Link } from "react-location";
import styled from "styled-components";

const StyledHeaderLink = styled(Link)`
  text-decoration: none;
  color: var(--color-text);
  display: block;
  width: fit-content;
  margin: 0;
  font-weight: bold;
`;

const Header: React.FC = () => {
  return (
    <header>
      <StyledHeaderLink to="/">
        <p>CoffeeBot 🤖</p>
      </StyledHeaderLink>
    </header>
  );
};

export default Header;
