import { css } from "@emotion/css";

export const header = css`
  display: flex;
  align-items: center;
  color: white;
  border-bottom: 0.5px solid #544d4d;
`;

export const tab = css`
  align-self: center;
  padding: 5px;
`;

export const activeTab = css`
  ${tab};
  background-image: linear-gradient(#692020, #1e2020);
  border-bottom: 0;
`;
