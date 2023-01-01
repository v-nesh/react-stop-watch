import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./common/header/Header";
import Stopwatch from "../components/stopwatch/Stopwatch";
import Timer from "../components/timer/Timer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Stopwatch />} />
            <Route path="/timer" element={<Timer />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
