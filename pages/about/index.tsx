import React, { useState, useContext } from "react";
import { links as Links } from "../../src/screens/homepage/styles";

import { useRouter } from "next/router";
import { myContext } from "@/src/modules/my-context";
import Terminal from "@/src/modules/terminal";
const About = () => {
  return (
    <Terminal header="About Me">
      <Links>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "28px", fontWeight: "500" }}>
            Hello, I&apos;m Vaibhav.
          </h1>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.5",
              margin: "20px auto",
              maxWidth: "450px",
            }}
          >
            &emsp;My name is Vaibhav Baheti, and I&apos;m currently a sophomore
            at NITK. I am deeply passionate about web development and aspire to
            become a skilled web developer. In addition to my love for coding, I
            also enjoy immersing myself in the world of gaming and indulging in
            captivating TV shows. Feel free to explore my work and learn more
            about my journey in the web development realm.
          </p>
        </div>
      </Links>
    </Terminal>
  );
};
export default About;
