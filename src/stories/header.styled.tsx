import styled from "styled-components";
import "./fonts.css";

export const HeaderUI = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 50px 0;
  background: #fff;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
  }

  .bone {
    transition: 100ms ease-out;
    &:hover {
      fill: rgb(241 124 18);
    }
  }
`;
