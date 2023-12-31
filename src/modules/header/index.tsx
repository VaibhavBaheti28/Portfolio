import { useContext, useEffect } from "react";
import { activeTab, tab as tabStyles, header } from "./styles";
import { useRouter } from "next/router";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { myContext } from "../my-context";

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
    if (selectedTab === 0) push("/");
    else {
      selectedTab && push(`/${tabs[selectedTab]}`);
    }
    if (tabs.length > 1)
      localStorage.setItem("selected-tab", JSON.stringify(selectedTab));
  }, [selectedTab]);
  useEffect(() => {
    if (tabs.length > 1) localStorage.setItem("tabs", JSON.stringify(tabs));
  }, [tabs]);

  return (
    <div className={header}>
      {tabs.map((tab: string, idx: number) => {
        return idx === selectedTab ? (
          tab === "home" ? (
            <div key={tab} className={activeTab}>
              <div style={{ display: "flex" }}>
                <p onClick={() => chooseTab(idx)}> {tab} </p>
              </div>
            </div>
          ) : (
            <div key={tab} className={activeTab}>
              <div style={{ display: "flex" }}>
                <p onClick={() => chooseTab(idx)}> {tab} </p>
                <CancelRoundedIcon
                  fontSize="medium"
                  onClick={() => onClose(idx)}
                />
              </div>
            </div>
          )
        ) : tab === "home" ? (
          <div key={tab} className={tabStyles}>
            <div style={{ display: "flex" }}>
              <p onClick={() => chooseTab(idx)}> {tab} </p>
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
