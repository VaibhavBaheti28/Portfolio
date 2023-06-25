import React,{useState, createContext} from "react";

export const myContext= createContext({});

const MyContextProvider = ({children}: any) => {
    const [tabs,setTabs]=useState([]);
    const [selectedTab,setSelectedTab]=useState(undefined);
    return <myContext.Provider value={ {tabs,setTabs, selectedTab ,setSelectedTab}}>{children}</myContext.Provider> 
}

export default MyContextProvider;