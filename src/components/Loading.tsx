import styled from "styled-components";
import SpinnerImg from "../assets/spinner.png";

const SpinnerContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

const Spinner = styled.img`
  max-width: 4rem;
  display: block;
  width: auto;
  animation: spin 2s linear infinite;
`;

const Loading = () => {
  return (
    <SpinnerContainer>
      <Spinner src={SpinnerImg} alt="Loading" />
    </SpinnerContainer>
  );
};

export default Loading;
