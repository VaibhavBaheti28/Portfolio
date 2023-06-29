import React, { useState, useContext } from "react";
import { links as Links } from "../../src/screens/homepage/styles";

import { useRouter } from "next/router";
import { myContext } from "@/src/modules/app-context";
import Terminal from "@/src/modules/terminal";
const About = () => {
  const { tabs } = useContext(myContext);
  const router = useRouter();
  const onClickTab = (val: string) => {
    tabs.push(val);
    router.push(`/${val}`);
  };
  return (
    <Terminal>
      <Links>
        <div style={{ alignSelf: "center" }}>
          <h1 style={{ color: "red" }}>About Page</h1>
        </div>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "28px", fontWeight: "500" }}>
            Welcome to my portfolio!
          </h1>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.5",
              margin: "20px auto",
              maxWidth: "450px",
            }}
          >
            &emsp; With a passion for web development and extensive experience,
            I specialize in crafting visually appealing and intuitive websites.
            I possess expertise in front-end and back-end development, utilizing
            the latest technologies and industry best practices. From clean code
            and responsive layouts to seamless user experiences, I ensure that
            every project exceeds expectations. Let&apos;s collaborate and bring
            your ideas to life with an amazing web presence.
          </p>
        </div>
      </Links>
    </Terminal>
  );
};
export default About;
