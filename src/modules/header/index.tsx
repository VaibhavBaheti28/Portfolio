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
    localSelectedTab !== undefined && setLocalSelectedTab(val);
  };
  const onClose = (val: number) => {
    if (val === 0) return;
    if (val === localSelectedTab) {
      setLocalSelectedTab((prev) => prev - 1);
      console.log(val);
      console.log(selectedTab);
    }

    console.log(localSelectedTab);

    setLocalTabs(
      localtabs.filter((_tab, idx) => {
        return idx !== val;
      })
    );
  };
  useEffect(() => {
    console.log(localtabs);
    console.log(localSelectedTab);
    setTabs(localtabs);
  }, [localtabs]);
  useEffect(() => {
    setSelectedTab(localSelectedTab);
  }, [localSelectedTab]);
  useEffect(() => {
    console.log(selectedTab, "streig");
    if (localSelectedTab === 0) push(`/`);
    else {
      console.log(tableRowClasses);
      localSelectedTab && push(`/${localtabs[localSelectedTab]}`);
    }
  }, [selectedTab]);

  return (
    <div className={header}>
      {tabs.map((tab: string, idx: number) => {
        return idx === selectedTab ? (
          <div key={tab} className={activeTab} onClick={() => chooseTab(idx)}>
            <div style={{ display: "flex" }}>
              <p onClick={() => chooseTab(idx)}> {tab} </p>
              <CancelRoundedIcon
                fontSize="small"
                onClick={() => onClose(idx)}
              />
            </div>
          </div>
        ) : (
          <div key={tab} className={tabStyles}>
            <div style={{ display: "flex" }}>
              <p onClick={() => chooseTab(idx)}> {tab} </p>
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
