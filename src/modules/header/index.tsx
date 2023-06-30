import { useContext, useEffect } from "react";
import { activeTab, tab as tabStyles, header } from "./styles";
import { useRouter } from "next/router";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { myContext } from "../my-context";
import { tableRowClasses } from "@mui/material";

export const Header = () => {
  let { tabs, setTabs, setSelectedTab, selectedTab } = useContext(myContext);
  const { push } = useRouter();
  const chooseTab = (val: number) => {
    setSelectedTab(val);
  };
  const onClose = (val: number) => {
    if (val === 0) return;

    setTabs(
      tabs.filter((_tab, idx) => {
        return idx !== val;
      })
    );

    val === selectedTab && setSelectedTab(val - 1);
  };

  useEffect(() => {
    console.log(selectedTab);
    if (selectedTab === 0) push(`/`);
    else {
      console.log(tableRowClasses);
      push(`/${tabs[selectedTab]}`);
    }
  }, [selectedTab]);

  return (
    <div className={header}>
      {tabs.map((tab: string, idx: number) => {
        return idx === selectedTab ? (
          <div key={tab} className={activeTab} onClick={() => chooseTab(idx)}>
            <div style={{ display: "flex" }}>
              <p> {tab} </p>
              <CancelRoundedIcon
                fontSize="small"
                onClick={() => onClose(idx)}
              />
            </div>
          </div>
        ) : (
          <div key={tab} className={tabStyles} onClick={() => chooseTab(idx)}>
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
