import React from "react";
import NavBar from "./NavBar";
import "./homePage.css";

function Layout(props) {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  );
}

export default Layout;
