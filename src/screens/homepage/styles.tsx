
import { css } from "@emotion/css";
import styled from "styled-components";

export const links = styled.div`
  display: flex;
  flex-direction: column;
  color: beige;
  
`;
export const left= css`
  margin-left: 15px;
`;


export const span= css`
  font-weight: bold;
  text-decoration: none;
  :hover{
    color: antiquewhite;
    font-size: 105%;
  }
`;
export const nav =css`
  width: 100%;
  align-items: center;
`;

export const nav_ul = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 115%;
`;
export const nav_ul_li=css`
  color: var(--text-color);
  cursor: pointer;
`;
