import React from "react";
import "./app.css";
//pages
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import NewGames from "./pages/NewGames";
import UpcomingGames from "./pages/UpcomingGames";
import PopularGames from "./pages/PopularGames";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-games" element={<NewGames />} />
        <Route path="/upcoming-games" element={<UpcomingGames />} />
        <Route path="/popular-games" element={<PopularGames/>} />
        <Route path="/game/:id" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
