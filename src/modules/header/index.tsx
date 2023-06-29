import { useContext, useEffect } from "react";
import { activeTab, tab as tabStyles, header } from "./styles";
import { useRouter } from "next/router";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { myContext } from "../my-context";

export const Header = () => {
  let { tabs, selectedTab } = useContext(myContext);
  const router = useRouter();
  const chooseTab = (val: number, tab: string) => {
    selectedTab = val;
    console.log(tabs, selectedTab);
    if (tab === "home") router.push("/");
    else router.push(`/${tab}`);
  };
  useEffect(() => {
    console.log(100);
  }, [selectedTab]);

  return (
    <div className={header}>
      {tabs.map((tab: string, idx: number) => {
        console.log(idx, selectedTab);
        return idx === selectedTab ? (
          <div
            key={tab}
            className={activeTab}
            onClick={() => chooseTab(idx, tab)}
          >
            <div style={{ display: "flex" }}>
              <p> {tab} </p>
              <CancelRoundedIcon fontSize="small" />
            </div>
          </div>
        ) : (
          <div
            key={tab}
            className={tabStyles}
            onClick={() => chooseTab(idx, tab)}
          >
            <div style={{ display: "flex" }}>
              <p> {tab} </p>
              <CancelRoundedIcon fontSize="small" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
