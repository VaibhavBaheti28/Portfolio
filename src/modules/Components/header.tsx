import { useContext, useEffect } from "react";
import { myContext } from "../App-context";
import { centre, centrehead, header } from "@/src/screens/homepage/styles";

export const Header = () => {
  let { tabs, selectedTab } = useContext(myContext);
  const chooseTab=(val :number)=>{
    selectedTab=val;
    console.log(tabs,selectedTab)
  }
  useEffect(()=>{
    return
  },[selectedTab])

  return (
    <div className={header}>
      {tabs.map((tab: string, idx: number) => {
        console.log(idx,selectedTab)
        return(
        (idx===selectedTab)?
          <div key={tab} className={centrehead} style={{padding:5}} onClick={()=>chooseTab(idx)}><p> {tab} </p></div>
        :
          <div key={tab} className={centre} style={{padding:5}} onClick={()=>chooseTab(idx)}><p> {tab} </p></div>
      )})}
    </div>
  );
};
