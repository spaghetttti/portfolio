import styled from "styled-components";

export const Wrapper = styled.span`
  display: inline-block;
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.colors?.text[100]};
`;

export const Path = styled.span`
  color: ${({ theme }) => theme.colors?.primary};
`;

export const WebsiteName = styled.span`
  color: ${({ theme }) => theme.colors?.primary};
`;

export const User = styled.span`
  color: ${({ theme }) => theme.colors?.secondary};
`;
