import React, { Component } from "react";
import { createRoute } from "@lugia/lugiax-router";
import Header from "./header";
import logo from "./assets/logo.png";
import "./App.css";
import { createLogicalNot } from "typescript";
import router from "./config/router-config";

export default () => {
  console.info("init main");

  return (
    <div className="app">
      <img src={logo} style={styles} />
      <Header />
      {createRoute(router)}
    </div>
  );
};

const styles = {
  padding: "30px"
};
