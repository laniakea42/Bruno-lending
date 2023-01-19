import styled from "styled-components";

export const Wrapper = styled.div`
  background: #ffffff;
  font-size: 40px;
  background: ${({ theme }) => theme.color?.primary ?? "#233445"};
`;
