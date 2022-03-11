// import { useEffect, useState } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import OperationContainer from "./components/OperationContainer";
import "./App.css";

function App() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex flex-col items-center justify-center text-center text-blue-500">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:typeOperation" element={<OperationContainer />} />
      </Routes>
    </div>
  );
}

export default App;
