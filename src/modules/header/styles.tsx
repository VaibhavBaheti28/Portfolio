import { css } from "@emotion/css";

export const header = css`
  display: flex;
  align-items: center;
  background-color: #444444;
`;

export const tab = css`
  align-self: center;
  padding: 5px;
`;

export const activeTab = css`
  ${tab};
  background-image: linear-gradient(#744444, #2f4f4f);
  border-bottom: 0;
  border-top: 5px solid #744444;
`;
