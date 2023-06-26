import { useContext, useEffect } from "react";
import { myContext } from "../App-context";
import { centre, centrehead, header } from "@/src/screens/homepage/styles";
import { useRouter } from "next/router";

export const Header = () => {
  let { tabs, selectedTab} = useContext(myContext);
  const router = useRouter();
  const chooseTab=(val :number, tab:string)=>{
    selectedTab=val;
    console.log(tabs,selectedTab)
    if(tab==="home")
      router.push("/")
    else
      router.push(`/${tab}`)
  }
  useEffect(()=>{
    console.log(100)
  },[selectedTab])

  return (
    <div className={header}>
      {tabs.map((tab: string, idx: number) => {
        console.log(idx,selectedTab)
        return(
        (idx===selectedTab)?
          <div key={tab} className={centrehead} style={{padding:5}} onClick={()=>chooseTab(idx,tab)}><p> {tab} </p></div>
        :
          <div key={tab} className={centre} style={{padding:5}} onClick={()=>chooseTab(idx,tab)}><p> {tab} </p></div>
      )})}
    </div>
  );
};
