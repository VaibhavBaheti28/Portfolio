import { useContext } from "react";
import { myContext } from "../App-context";

export const Header = () => {
  const { tabs, selectedTab } = useContext(myContext);
  return (
    <div>
      {tabs.map((tab: string) => {
        return <p key={tab}>{tab}</p>;
      })}
    </div>
  );
};
