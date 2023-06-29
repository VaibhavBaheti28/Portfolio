import { createContext, useMemo, useState } from "react";

export const myContext = createContext({
  // tabs: ["home"],
  // selectedTab: { currTab: 0 },
  tabs: ["home"],
  setTabs: (val: string[]) => {},
  selectedTab: 0,
  setSelectedTab: (val: number) => {},
});

const MyContextProvider = ({ children }: any) => {
  const [tabs, setTabs] = useState(["home"]);
  const [selectedTab, setSelectedTab] = useState(0);
  const value = useMemo(
    () => ({ tabs, setTabs, selectedTab, setSelectedTab }),
    [tabs, selectedTab]
  );
  return <myContext.Provider value={value}>{children}</myContext.Provider>;
};

export default MyContextProvider;
