import React, { useContext } from "react";
import { links as Links, optionContainer } from "./styles";
import { useRouter } from "next/router";
import Terminal from "@/src/modules/terminal";
import { Header } from "@/src/modules/header";
import { myContext } from "@/src/modules/my-context";
import { homeOptions } from "@/src/data-source/home-options";
const HomePage = () => {
  const { tabs, setTabs, setSelectedTab } = useContext(myContext);
  const router = useRouter();
  const onClickTab = (val: string) => {
    setTabs([...tabs, val]);
    setSelectedTab(tabs.length);
    router.push(`/${val}`);
  };
  return (
    <Terminal header="HomePage">
      <Links>
        <div className={optionContainer}>
          {Object.values(homeOptions).map((item, idx) => {
            return (
              <div onClick={() => onClickTab(item.urlSlug)} key={item.title}>
                <span>$ {item.title}</span>
              </div>
            );
          })}
        </div>
      </Links>
    </Terminal>
  );
};
export default HomePage;
