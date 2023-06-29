import { css } from "@emotion/css";
import styled from "styled-components";

export const links = styled.div`
  display: flex;
  flex-direction: column;
  color: beige;
`;
export const optionContainer = css`
  margin: 3rem 5rem 0;
  span {
    font-weight: bold;
    text-decoration: none;
    :hover {
      color: antiquewhite;
      font-size: 105%;
    }
  }
`;
