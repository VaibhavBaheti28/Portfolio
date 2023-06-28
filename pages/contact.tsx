import React, { useState, useContext } from "react";
import {
  links as Links,
  nav_ul,
  nav,
  centre,
  span,
  left,
} from "../src/screens/homepage/styles";

import { useRouter } from "next/router";
import { myContext } from "@/src/modules/App-context";
import HomePage from "@/src/screens/homepage";
import Terminal from "@/src/modules/terminal";
import { Header } from "@/src/modules/Components/header";
const Contact = () => {
  const router = useRouter();
  
  return (
    <Terminal>
      <Links>
        <Header />
        <div style={{ alignSelf: "center" }}>
          <h1 style={{ color: "red" }}>Contact Page</h1>
        </div>
        <div style={{textAlign: "center", margin: "20px auto", maxWidth: "400px"}}>
          <h2 style={{fontSize: "24px", fontWeight: "700", marginBottom: "10px"}}>Contact Me</h2>
          <p style={{fontSize: "16px", marginBottom: "20px"}}>
            I&apos;m thrilled to connect with you! Whether you have a question, an
            exciting project idea, or just want to say hi, feel free to reach
            out using the form below or through the provided contact details.
            I&apos;ll get back to you as soon as possible. Looking forward to hearing
            from you!
          </p>
          <form style={{width: "100%", padding: "10px", marginBottom: "10px"}}>
            <input type="text" placeholder="Your Name" style={{width: "100%", padding: "10px", marginBottom: "10px"}}/>
            <input type="email" placeholder="Your Email" style={{width: "100%", padding: "10px", marginBottom: "10px"}}/>
            <textarea placeholder="Your Message" style={{width: "100%", padding: "10px", marginBottom: "10px", height: "120px"}}></textarea>
            <button type="submit" style={{backgroundColor: "#007bff", color: "#fff", border: "none",padding: "10px 20px",cursor: "pointer"}}>Send Message</button>
          </form>
        </div>
      </Links>
    </Terminal>
  );
};
export default Contact;
