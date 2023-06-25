import About from "@/pages/about";
import Contact from "@/pages/contact";
import Projects from "@/pages/projects";
import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { links as Links, nav_ul, nav, centre, span, left } from "./styles";
import Terminal from "./modules/terminal";
import { myContext } from "./modules/App-context";
import { Header } from "./modules/Components/header";
import { useRouter } from "next/router";
const HomePage = () => {
  const { tabs, setTabs, selectedTabs, setSelectedTabs ,setTabHandler, setSelectedTabHandler} =useContext(myContext);
  const router = useRouter();
  const onClickTab = (val: string) => {
    console.log(val);
    setTabHandler(val);
    console.log(tabs);
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
