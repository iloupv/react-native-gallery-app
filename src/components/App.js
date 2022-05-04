import React, { useState } from "react";
import "./App.css";
import ButtonAppBar from "./Header/Header"
import ImageListGrid from "./Grid/ImageListGrid"
import Toolbar from "@mui/material/Toolbar"

export default class App extends React.Component {

  render() {
    return (
      <div className="component-app">
        <ButtonAppBar />
        <Toolbar /> {/* To add spacing between AppBar and image container (box). */}
        <ImageListGrid />
      </div>
    );
  }
}