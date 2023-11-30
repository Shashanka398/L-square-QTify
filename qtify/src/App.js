
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./index.css";
import styles from "./App.module.css"


function App() {

  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}


export default App;
