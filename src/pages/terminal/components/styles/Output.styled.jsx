import styled from "styled-components";

export const OutputContainer = styled.div`
  padding-bottom: 0.25rem;
  font-family: 'Lucida Console', 'Courier New', 'Consolas', monospace;
  color: ${({ theme }) => theme.colors?.text[100]};
`;

export const Wrapper = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
`;

export const UsageDiv = styled.div`
  margin-top: ${props => (props.marginY ? "0.75rem" : "0.25rem")};
  margin-bottom: 0.75rem;
  line-height: 1.5rem;
`;
