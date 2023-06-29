import { useContext, useEffect } from "react";
import { activeTab, tab as tabStyles, header } from "./styles";
import { useRouter } from "next/router";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { myContext } from "../my-context";
import { tableRowClasses } from "@mui/material";

export const Header = () => {
  let { tabs, setTabs, setSelectedTab, selectedTab } = useContext(myContext);
  const { push } = useRouter();
  const chooseTab = (val: number, tab: string, tabs?: string[]) => {
    console.log(val);
    console.log(tabs);
    setSelectedTab(val);
    if (tab === "home") push(`/`);
    else {
      console.log(tableRowClasses);
      tabs && setTabs(tabs || [""]);
      push(`/${tab}`);
    }
  };
  const onClose = (val: number) => {
    if (val === 0) return;

    chooseTab(
      tabs.length - 2,
      tabs.filter((_tab, idx) => {
        return idx === val;
      })[0],
      tabs.filter((_tab, idx) => {
        return idx !== val;
      })
    );
  };
  return (
    <div className={header}>
      {tabs.map((tab: string, idx: number) => {
        return idx === selectedTab ? (
          <div
            key={tab}
            className={activeTab}
            onClick={() => chooseTab(idx, tab)}
          >
            <div style={{ display: "flex" }}>
              <p> {tab} </p>
              <CancelRoundedIcon
                fontSize="small"
                onClick={() => onClose(idx)}
              />
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
              <CancelRoundedIcon
                fontSize="small"
                onClick={() => onClose(idx)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
