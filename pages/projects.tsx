
import React, { useState, useContext } from "react";
import { links as Links, nav_ul, nav, centre, span, left } from "../src/screens/homepage/styles";

import { useRouter } from "next/router";
import { myContext } from "@/src/modules/App-context";
import HomePage from "@/src/screens/homepage";
import Terminal from "@/src/modules/terminal";
import { Header } from "@/src/modules/Components/header";
const Project = () => {

  const {tabs} =useContext(myContext);
  const router = useRouter();
  const onClickTab = (val: string) => {
    console.log(val);
    //setTabHandler(val);
    tabs.push(val);
    router.push(`/${val}`);
  };
  return (
    <Terminal>
      <Links>
        <Header />
        <div style={{alignSelf: "center"}}>
          <h1 style={{ color: "red" }}>Project Page</h1>
        </div>
          <div className={nav}>
            <div className={nav_ul}>
              <div className={`${left}`}>
                <div onClick={() => onClickTab("about")}>
                  <span className={`${span}`}>$ About Me</span>
                </div>
              </div>
              <div className={`${left}`}>
                <div onClick={() => onClickTab("contact")}>
                  <span className={`${span}`}>$ Contact</span>
                </div>
              </div>
              <div className={`${left}`}>
                <div onClick={() => onClickTab("projects")}>
                  <span className={`${span}`}>$ Projects</span>
                </div>
              </div>
            </div>
          </div>

      </Links>
    </Terminal>
  );
};
export default Project;
