import { css } from "@emotion/css";

export const terminalBody = css`
  align-items: center;

  width: 60%;
  min-height: 30rem;
  background-color: transparent;
  border: 2px solid #3e3535;
  opacity: 8;
  border-radius: 8px;
  overflow-y: auto;
`;

export const fakeMenu = css`
  position: relative;
  display: flex;
  width: 100%;
  height: 25px;
  background-color: #1e1c1c;
  top: 0;
  color: green;
  section {
    padding: 0.5rem;
    display: flex;
    justify-self: flex-start;
    gap: 0.5rem;
  }
  h3 {
    margin: 0 auto;
  }
`;

export const fakeButtons = css`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: 1px solid #000;
  position: relative;
`;

export const fakeClose = css`
  background-color: #ff3b47;
  border-color: #9d252b;
`;

export const fakeMinimize = css`
  background-color: #ffc100;
  border-color: #9d802c;
`;

export const fakeZoom = css`
  background-color: #00d742;
  border-color: #049931;
`;
