import React,{useState, createContext} from "react";

export const myContext= createContext<Record<any,any>>({tabs: ["Home"], selectedTab: "", setTabHandler:function () {},})

export const MyContextProvider = ({children}: any) => {
    const [tabs,setTabs]=useState(["Home"]);
    const [selectedTab,setSelectedTab]=useState("Home");
    const setTabHandler =(val: string)=>{
        console.log(val);
        setTabs([...tabs,val]);
    }
    const setSelectedTabHandler =(val: string)=>{
        setSelectedTab(val);
    }
    return <myContext.Provider value={ {tabs,setTabs,selectedTab,setSelectedTab,setTabHandler,setSelectedTabHandler}}>{children}</myContext.Provider> 
}
