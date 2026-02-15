import styled from "styled-components";

export const HeroContainer = styled.div`
  margin-bottom: 1rem;

  div {
    line-height: 1.5;
  }
`;

export const PreName = styled.pre`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors?.secondary};
  font-family: 'Lucida Console', 'Courier New', monospace;
  font-size: 12px;
  line-height: 1.2;

  @media (max-width: 550px) {
    display: none;
  }
`;

export const PreWrapper = styled.div``;

export const PreNameMobile = styled.pre`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors?.secondary};
  font-family: 'Lucida Console', 'Courier New', monospace;
  font-size: 11px;
  line-height: 1.2;

  @media (min-width: 550px) {
    display: none;
  }
`;

export const PreImg = styled.pre`
  @media (max-width: 550px) {
    display: none;
  }
`;

export const Seperator = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors?.text[300]};
`;

export const Cmd = styled.span`
  color: ${({ theme }) => theme.colors?.secondary};
  font-weight: bold;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors?.secondary};
  text-decoration: underline;
  line-height: 1.5rem;
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.colors?.primary};
  }
`;
