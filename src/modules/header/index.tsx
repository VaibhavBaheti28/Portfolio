import { useState, useContext, useEffect } from "react";
import { activeTab, tab as tabStyles, header } from "./styles";
import { useRouter } from "next/router";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { myContext } from "../my-context";
import { tableRowClasses } from "@mui/material";

export const Header = () => {
  const { tabs, setTabs, setSelectedTab, selectedTab } = useContext(myContext);
  const [localTabs, setLocalTabs] = useState(tabs);
  const [localSelectedTab, setLocalSelectedTab] = useState(selectedTab);
  const { push } = useRouter();
  const chooseTab = (val: number) => {
    // console.log({ localSelectedTab, localTabs, val });
    localSelectedTab !== undefined && setLocalSelectedTab(val);
  };
  const onClose = (val: number) => {
    if (val === 0) return;
    if (val === localSelectedTab) {
      setLocalSelectedTab(val - 1);
    }
    console.log(localTabs);
    setLocalTabs(
      localTabs.filter((_tab, idx) => {
        return idx !== val;
      })
    );
  };
  useEffect(() => {
    setTabs(localTabs);
  }, [localTabs]);
  useEffect(() => {
    setSelectedTab(localSelectedTab);
    if (localSelectedTab === 0) push(`/`);
    else {
      localSelectedTab && push(`/${localTabs?.[localSelectedTab] || "/"}`);
    }
  }, [localSelectedTab]);

  return (
    <div className={header}>
      {localTabs.map((tab: string, idx: number) => {
        return idx === localSelectedTab ? (
          <div key={tab} className={activeTab}>
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
