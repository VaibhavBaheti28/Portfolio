
import React, { useState, useContext } from "react";
import { links as Links, nav_ul, nav, centre, span, left } from "../src/screens/homepage/styles";

import { useRouter } from "next/router";
import Terminal from "@/src/screens/homepage/modules/terminal";
import { Header } from "@/src/screens/homepage/modules/Components/header";
import { myContext } from "@/src/modules/App-context";
import HomePage from "@/src/screens/homepage";
const About = () => {

  const { tabs, setTabs, selectedTabs, setSelectedTabs ,setTabHandler, setSelectedTabHandler} =useContext(myContext);
  const router = useRouter();
  const onClickTab = (val: string) => {
    console.log(val);
    setTabHandler(val);
    console.log(tabs);
    router.push(`/${val}`);
  };
  return(<HomePage/>)
  // return (
  //   <Terminal>
  //     <Links>
  //       <Header />
  //       <div className={centre}>
  //         <h1 style={{ color: "red" }}>Home Page</h1>
  //       </div>
  //         <div className={nav}>
  //           <div className={nav_ul}>
  //             <div className={`${left}`}>
  //               <div onClick={() => onClickTab("about")}>
  //                 <span className={`${span}`}>$ About Me</span>
  //               </div>
  //             </div>
  //             <div className={`${left}`}>
  //               <div onClick={() => onClickTab("contact")}>
  //                 <span className={`${span}`}>$ Contact</span>
  //               </div>
  //             </div>
  //             <div className={`${left}`}>
  //               <div onClick={() => onClickTab("projects")}>
  //                 <span className={`${span}`}>$ Projects</span>
  //               </div>
  //             </div>
  //           </div>
  //         </div>

  //     </Links>
  //   </Terminal>
  // );
};
export default About;
