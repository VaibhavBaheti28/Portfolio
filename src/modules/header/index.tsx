import { useContext, useEffect } from "react";
import { centre, centrehead, header} from "./styles";
import { useRouter } from "next/router";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { myContext } from "../app-context";

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
    <div className={header} style={{backgroundColor: "rgb(130, 27, 27)", margin: "2px solid red"}}>
      {tabs.map((tab: string, idx: number) => {
        console.log(idx, selectedTab);
        return idx === selectedTab ? (
          <div
            key={tab}
            className={centrehead}
            onClick={() => chooseTab(idx, tab)}
          >
            <div style={{display: "flex"}}>
              <p> {tab} </p>
              <CancelRoundedIcon fontSize="small"/>
            </div>
          </div>
        ) : (
          <div
            key={tab}
            className={centre}
            onClick={() => chooseTab(idx, tab)}
          >
            <div style={{display: "flex"}}>
              <p> {tab} </p>
              <CancelRoundedIcon fontSize="small" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
