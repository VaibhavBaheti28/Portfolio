import React, { useContext } from "react";
import { links as Links, nav_ul, nav, span, left } from "./styles";
import { useRouter } from "next/router";
import Terminal from "@/src/modules/terminal";
import { Header } from "@/src/modules/header";
import { myContext } from "@/src/modules/app-context";
const HomePage = () => {
  const {tabs} =useContext(myContext);
  const router = useRouter();
  const onClickTab = (val: string) => {
    console.log(val);
    tabs.push(val);
    router.push(`/${val}`);
  };
  return (
    <Terminal header="HomePage">
      <Links>
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
