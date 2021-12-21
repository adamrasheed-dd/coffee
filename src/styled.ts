import styled, { css } from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100vh;
  padding: 1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Footer = styled.footer`
  margin-top: auto;
  font-size: 0.875rem;
  line-height: 1;
`;

export const LoginLink = styled.button`
  border: none;
  background: var(--color-bg-gray);
  color: white;
  padding: 0.5rem 1rem;
  display: block;
  font-weight: 500;
  width: fit-content;
  text-decoration: none;
`;

export const Highlight = styled.p`
  font-family: "IBM Plex Mono";
  background: var(--color-highlight);
  width: fit-content;
  padding: 0.125rem 0.5rem;
  transform: skew(-13deg, 0deg);
`;

export const Message = styled.p`
  font-size: 4rem;
  margin: 1rem 0;
`;

type BrewButtonProps = {
  readonly small: boolean;
};

export const BrewButton = styled.button<BrewButtonProps>`
  background: var(--color-highlight);
  font-size: 2rem;
  padding: 0.75rem 1.5rem;
  display: block;
  width: fit-content;
  text-decoration: none;
  border: none;
  ${(props) =>
    props.small &&
    css`
      font-size: 1rem;
      padding: 0.25rem 1rem;
    `}
`;

export const LastBrewed = styled.p`
  margin: 1rem 0;
`;
