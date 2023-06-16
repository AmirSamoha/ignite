import React from "react";
import "./app.css";
//pages
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import NewGames from "./pages/NewGames";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-games" element={<NewGames />} />
        <Route path="/game/:id" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
