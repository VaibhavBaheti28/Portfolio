import {createContext } from "react";

export const myContext = createContext({tabs:["home"], selectedTab:0});

const MyContextProvider = ({ children }: any) => {
  const tabs=["home"];
  let selectedTab=0;
  return (
    <myContext.Provider
      value={{ tabs, selectedTab }}
    >
      {children}
    </myContext.Provider>
  );
};

export default MyContextProvider;