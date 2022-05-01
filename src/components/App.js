import React, { useState } from "react";
import "./App.css";
import ButtonAppBar from "./Header/Header"
import ImageListGrid from "./Grid/ImageListGrid"

export default class App extends React.Component {

  render() {
    return (
      <div className="component-app">
        <ButtonAppBar />
        <ImageListGrid />
      </div>
    );
  }
}