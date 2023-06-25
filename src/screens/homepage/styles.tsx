import { css } from "@emotion/css";
import styled from "styled-components";

export const links = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width:550px;
  background-color: gainsboro;
  color: #080606;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;
export const centre= css`
  align-self: center;
`;

export const left= css`
  margin-left: 15px;
`;

export const span= css`
  color: #064a06;
  font-weight: bold;
  text-decoration: none;
  :hover{
    color: #55ca55;
    font-size: 105%;
  }
`;
export const term =css`
  box-sizing: border-box;
  display:flex;
  flex-direction: column;
  width:100%;
  align-items: center;
`;


export const fakeMenu = css`
  width: 550px;
  box-sizing: border-box;
  height: 25px;
  background-color: #bbb;
  margin: 0 auto;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

export const fakeScreen = css`
  background-color: #151515;
  box-sizing: border-box;
  width: 550px;
  margin: 0 auto;
  padding: 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const fakeButtons = css`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: 1px solid #000;
  position: relative;
  top: 6px;
  left: 6px;
  background-color: #ff3b47;
  border-color: #9d252b;
  display: inline-block;
`;

export const fakeMinimize = css`
  left: 11px;
  background-color: #ffc100;
  border-color: #9d802c;
`;

export const fakeZoom = css`
  left: 16px;
  background-color: #00d742;
  border-color: #049931;
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
