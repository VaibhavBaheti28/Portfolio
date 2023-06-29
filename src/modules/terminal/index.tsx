import { ReactNode, useContext } from "react";
import {
  fakeMenu,
  fakeMinimize,
  fakeButtons,
  fakeZoom,
  terminalBody,
  fakeClose,
} from "./styles";
import { Header } from "../header";

const Terminal = ({
  children,
  header,
}: {
  children: ReactNode;
  header?: string;
}) => {
  return (
    <div className={terminalBody}>
      <div className={fakeMenu}>
        <section>
          <div className={`${fakeButtons} ${fakeClose}`}></div>
          <div className={`${fakeMinimize} ${fakeButtons}`}></div>
          <div className={`${fakeZoom} ${fakeButtons}`}></div>
        </section>
        <h3>{header}</h3>
      </div>

      <Header />
      <div>{children}</div>
    </div>
  );
};
export default Terminal;
