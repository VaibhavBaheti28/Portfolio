import React, { useState, useContext } from "react";
import { links as Links, nav_ul, nav, centre, span, left } from "./styles";
import { useRouter } from "next/router";
import Terminal from "@/src/modules/terminal";
import { Header } from "@/src/modules/Components/header";
import { myContext } from "@/src/modules/App-context";
const HomePage = () => {
  const {tabs} =useContext(myContext);
  const router = useRouter();
  const onClickTab = (val: string) => {
    console.log(val);
    tabs.push(val);
    router.push(`/${val}`);
  };
  return (
    <Terminal>
      <Links>
        <Header />
        <div className={centre}>
          <h1 style={{ color: "red" }}>Home Page</h1>
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
export default HomePage;
