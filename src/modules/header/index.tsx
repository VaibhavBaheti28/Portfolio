import { useContext, useEffect } from "react";
import { activeTab, tab as tabStyles, header } from "./styles";
import { useRouter } from "next/router";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { myContext } from "../my-context";
import { tableRowClasses } from "@mui/material";

export const Header = () => {
  const { tabs, setTabs, setSelectedTab, selectedTab } = useContext(myContext);
  const { push } = useRouter();
  const chooseTab = (val: number) => {
    selectedTab !== undefined && setSelectedTab(val);
  };
  const onClose = (val: number) => {
    if (val === 0) return;
    if (val === selectedTab) {
      setSelectedTab(val - 1);
    }

    console.log(selectedTab);
    setTabs(
      tabs.filter((_tab, idx) => {
        return idx !== val;
      })
    );
  };
  useEffect(() => {
    if (selectedTab === 0) push(`/`);
    else {
      console.log(tableRowClasses);
      selectedTab && push(`/${tabs[selectedTab]}`);
    }
  }, [selectedTab]);

  return (
    <div className={header}>
      {tabs.map((tab: string, idx: number) => {
        return idx === selectedTab ? (
          <div key={tab} className={activeTab}>
            <div style={{ display: "flex" }}>
              <p onClick={() => chooseTab(idx)}> {tab} </p>
              <CancelRoundedIcon
                fontSize="medium"
                onClick={() => onClose(idx)}
              />
            </div>
          </div>
        ) : (
          <div key={tab} className={tabStyles}>
            <div style={{ display: "flex" }}>
              <p onClick={() => chooseTab(idx)}> {tab} </p>
              <CancelRoundedIcon
                fontSize="medium"
                onClick={() => onClose(idx)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
