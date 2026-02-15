import styled from "styled-components";

export const ThemesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`;

export const ThemeSpan = styled.span`
  margin-right: 1rem;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors?.secondary};
  cursor: pointer;
  
  &:hover {
    color: ${({ theme }) => theme.colors?.primary};
    text-decoration: underline;
  }
`;
